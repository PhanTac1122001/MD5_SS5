import baseUrl from "@/apis/instance";


export const fetchAllCategory= async(pageSize,categoryName,pageNo)=>{
   
      const response=await baseUrl.get(`/list?pageSize=${pageSize}&categoryName=${categoryName}&pageNo=${pageNo}`)

  return response.data; 
  };


export const createCategory= async(category)=>{
    const response =await baseUrl.post("/create",category)
    return response;
}

export const updateCategory= async(category,id)=>{
    const response =await baseUrl.put(`/update/${id}`,category)
    return response;
}

export const deleteCategory= async(id)=>{
    const response =await baseUrl.delete(`/delete/${id}`)
    return response;
}