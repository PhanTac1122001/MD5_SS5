import baseUrl from "@/apis/instance";
import {
  createCategory,
  deleteCategory,
  fetchAllCategory,
  updateCategory,
} from "@/services/categoryService";
import { CloseOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Pagination, Input, Table, Modal, Form, message } from "antd";

import React, { useEffect, useState } from "react";

export default function CategoryManager() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [idEdit, setIdEdit] = useState(null);
  useEffect(() => {
    const getAllCategory = async () => {
      setIsLoading(true);
      const response = await fetchAllCategory(
        pageSize,
        searchValue,
        currentPage
      );
      setCategories(response.content);
      setTotalPage(response.totalElements);
      setIsLoading(false);
    };
    getAllCategory();
  }, [pageSize, searchValue, currentPage]);

  const handleChangePage = (page) => {
    setCurrentPage(page - 1);
  };

  const handleShowModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleEdit = (category) => {
    setIdEdit(category.id); // Lưu ID danh mục đang chỉnh sửa
    form.setFieldsValue({
      categoryName: category.categoryName,
      description: category.description,
    });
    setIsShowModal(true);
  };
  const handleDelete = async (id)=>{
    try {
      const response = await deleteCategory(id);
   
      if (response.status === 204) {
        setCategories(categories.filter((category) => category.id !== id));
        message.success("Xóa danh mục thành công");
        
      }
    } catch (error) {
      message.error("Xóa danh mục thất bại");
    }
  }
  const onFinish = async (category) => {
    if (idEdit) {
      try {
        const response = await updateCategory(category, idEdit);
       
        if (response.status === 200) {
          message.success("Sửa danh mục thành công");
          form.resetFields();
          setIdEdit(null); // Đặt lại trạng thái để modal chuyển sang chế độ thêm mới
          handleCloseModal();
        }
      } catch (error) {
        message.error("Sửa danh mục thất bại");
      }
    } else {
      // Thêm mới
      const newCategory = { ...category, status: true }; // Mặc định status là `true`
      try {
        const response = await createCategory(newCategory);
       
        if (response.status === 201) {
          message.success("Thêm danh mục thành công");
          form.resetFields();
          handleCloseModal();
        }
      } catch (error) {
        message.error("Thêm danh mục thất bại");
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dataSource = categories.map((cat) => {
    return {
      id: cat.id,
      categoryName: cat.categoryName,
      description: cat.description,
      status: cat.status ? "Active" : "InActive",
    };
  });

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      render: (text, category) => (
        <div>
          <Button onClick={() => handleEdit(category)}>Sửa</Button>
          <Button onClick={() => handleDelete(category.id)}>Xóa</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Modal
        title={
          <div className="flex items-center justify-between mb-4">
            <h3>{idEdit ? "Edit Category" : "Add Category"}</h3>{" "}
            {/* Tiêu đề thay đổi */}
            <CloseOutlined onClick={handleCloseModal} />
          </div>
        }
        open={isShowModal}
        footer={false}
        closeIcon={false}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Category Name"
            name="categoryName"
            rules={[
              {
                required: true,
                message: "Please input the category name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input the description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <div className="mt-4 flex justify-end gap-3">
              <Button
                type="default"
                htmlType="button"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {idEdit ? "Update" : "Submit"} {/* Nút thay đổi */}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <main>
        <div className="flex justify-between items-center mb-4">
          <h3>Category</h3>
          <Button type="primary" onClick={handleShowModal}>
            Add
          </Button>
        </div>
        <div className="flex justify-end gap-4 mb-4">
          <Input.Search
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            className="w-[300px]"
          />
          <ReloadOutlined />
        </div>
        <div>
          <Table
            loading={isLoading}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
        </div>
        <div className="flex justify-end">
          <Pagination
            onChange={handleChangePage}
            total={totalPage}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={pageSize}
            defaultCurrent={currentPage}
          />
        </div>
        <div></div>
      </main>
    </>
  );
}
