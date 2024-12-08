import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="utf-8" />
  <link
    rel="preload"
    as="font"
    href="/_next/static/media/4f05ba3a6752a328-s.p.woff2"
    crossOrigin=""
    type="font/woff2"
  />
  <link
    rel="stylesheet"
    href="/_next/static/css/25a5f1d8f1639e33.css"
    data-precedence="next"
  />
  <link
    rel="preload"
    href="/_next/static/chunks/webpack-69f0461067e97cb7.js"
    as="script"
  />
  <link
    rel="preload"
    href="/_next/static/chunks/fd9d1056-f83c2f183af923e2.js"
    as="script"
  />
  <link
    rel="preload"
    href="/_next/static/chunks/596-519a8362a3046b00.js"
    as="script"
  />
  <link
    rel="preload"
    href="/_next/static/chunks/main-app-f09da2cacb981fb9.js"
    as="script"
  />
  <link
    rel="preload"
    as="image"
    fetchpriority="high"
    imagesrcset="/_next/image?url=%2Fimages%2Flogo.png&w=16&q=75 16w, /_next/image?url=%2Fimages%2Flogo.png&w=32&q=75 32w, /_next/image?url=%2Fimages%2Flogo.png&w=48&q=75 48w, /_next/image?url=%2Fimages%2Flogo.png&w=64&q=75 64w, /_next/image?url=%2Fimages%2Flogo.png&w=96&q=75 96w, /_next/image?url=%2Fimages%2Flogo.png&w=128&q=75 128w, /_next/image?url=%2Fimages%2Flogo.png&w=256&q=75 256w, /_next/image?url=%2Fimages%2Flogo.png&w=384&q=75 384w, /_next/image?url=%2Fimages%2Flogo.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Flogo.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Flogo.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Flogo.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Flogo.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Flogo.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Flogo.png&w=3840&q=75 3840w"
    imagesizes="(min-width: 1300px) 70px, (min-width: 380px) 60px, calc(20vw - 12px)"
  />
  <title>Trung tâm chiếu phim quốc gia</title>
  <meta name="description" content="Phát triển bởi AnVui" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="icon"
    href="/icon.ico?6460ab1daa2a9ac9"
    type="image/x-icon"
    sizes="any"
  />
  <meta name="next-size-adjust" />
  <div
    style={{
      position: "fixed",
      zIndex: 9999,
      top: 16,
      left: 16,
      right: 16,
      bottom: 16,
      pointerEvents: "none"
    }}
  />
  <div className="h-16 px-4 py-2 items-center justify-between bg-gray-800 lg:hidden flex">
    <div className="flex items-center gap-2">
      <img
        alt="app"
        loading="lazy"
        width={50}
        height={50}
        decoding="async"
        data-nimg={1}
        style={{ color: "transparent" }}
        srcSet="/_next/image?url=%2Fimages%2Fncc-app.webp&w=64&q=75 1x, /_next/image?url=%2Fimages%2Fncc-app.webp&w=128&q=75 2x"
        src="/_next/image?url=%2Fimages%2Fncc-app.webp&w=128&q=75"
      />
      <div>
        <p className="text-sm font-semibold">Chiếu phim Quốc gia (NCC)</p>
        <p className="text-muted-foreground text-sm">Giải trí</p>
      </div>
    </div>
    <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-9 rounded-md px-3">
      Nhận
    </button>
  </div>
  <div className="fixed z-40 w-full text-white transition duration-500 navbar">
    <div className="mx-auto max-w-7xl">
      <div className="px-4 xl:px-0 flex items-center h-16 xl:h-20 gap-2">
        <a
          className="relative w-[60px] xl:w-[70px] h-[40px] xl:h-[50px]"
          href="/"
        >
          <img
            alt="logo"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent"
            }}
            sizes="(min-width: 1300px) 70px, (min-width: 380px) 60px, calc(20vw - 12px)"
            srcSet="/_next/image?url=%2Fimages%2Flogo.png&w=16&q=75 16w, /_next/image?url=%2Fimages%2Flogo.png&w=32&q=75 32w, /_next/image?url=%2Fimages%2Flogo.png&w=48&q=75 48w, /_next/image?url=%2Fimages%2Flogo.png&w=64&q=75 64w, /_next/image?url=%2Fimages%2Flogo.png&w=96&q=75 96w, /_next/image?url=%2Fimages%2Flogo.png&w=128&q=75 128w, /_next/image?url=%2Fimages%2Flogo.png&w=256&q=75 256w, /_next/image?url=%2Fimages%2Flogo.png&w=384&q=75 384w, /_next/image?url=%2Fimages%2Flogo.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Flogo.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Flogo.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Flogo.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Flogo.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Flogo.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Flogo.png&w=3840&q=75 3840w"
            src="/_next/image?url=%2Fimages%2Flogo.png&w=3840&q=75"
          />
        </a>
        <nav className="hidden xl:flex items-center justify-between gap-6 z-30 flex-1 px-6">
          <a
            className="hover:text-red-500 whitespace-nowrap text-red-500"
            href="/"
          >
            Trang chủ
          </a>
          <a
            className="hover:text-red-500 whitespace-nowrap text-white"
            href="/movies"
          >
            Lịch chiếu
          </a>
          <a
            className="hover:text-red-500 whitespace-nowrap text-white"
            href="/news-list"
          >
            Tin tức
          </a>
          <a
            className="hover:text-red-500 whitespace-nowrap text-white"
            href="/promotions"
          >
            Khuyến mãi
          </a>
          <a
            className="hover:text-red-500 whitespace-nowrap text-white"
            href="/ticket-price"
          >
            Giá vé
          </a>
          <a
            className="hover:text-red-500 whitespace-nowrap text-white"
            href="/festivals"
          >
            Liên hoan phim, Tuần phim
          </a>
          <a
            className="hover:text-red-500 whitespace-nowrap text-white"
            href="/about"
          >
            Giới thiệu
          </a>
        </nav>
        <div className="font-semibold xl:hidden">
          <p className="text-xs">TRUNG TÂM CHIẾU PHIM QUỐC GIA</p>
          <p className="text-xs">National Cinema Center</p>
        </div>
      </div>
    </div>
  </div>
  {/*$*/}
  {/*$?*/}
  <template id="B:0" />
  <div className="h-full flex items-center justify-center">
    <span
      style={{
        display: "inherit",
        position: "relative",
        width: 50,
        height: 50,
        transform: "rotate(165deg)"
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "block",
          width: 10,
          height: 10,
          borderRadius: 5,
          transform: "translate(-50%, -50%)",
          animationFillMode: "none",
          animation: "react-spinners-HashLoader-before 2s infinite"
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "block",
          width: 10,
          height: 10,
          borderRadius: 5,
          transform: "translate(-50%, -50%)",
          animationFillMode: "none",
          animation: "react-spinners-HashLoader-after 2s infinite"
        }}
      />
    </span>
  </div>
  {/*/$*/}
  {/*/$*/}
  <footer className="bg-[#0B0D13] text-white">
    <div className="mx-auto p-8">
      <ul className="flex items-center justify-center flex-wrap gap-4 sm:gap-10 mb-6 sm:mb-10 text-sm md:text-base">
        <li>
          <a href="/policy">Chính sách</a>
        </li>
        <li>
          <a href="/movies">Lịch chiếu</a>
        </li>
        <li>
          <a href="/news-list">Tin tức</a>
        </li>
        <li>
          <a href="/ticket-price">Giá vé</a>
        </li>
        <li>
          <a href="/faqs">Hỏi đáp</a>
        </li>
        <li>
          <a href="/contact">Liên hệ</a>
        </li>
      </ul>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-4 sm:gap-10">
        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/chieuphimquocgiavn/"
            target="_blank"
          >
            <img
              alt="facebook"
              loading="lazy"
              width={30}
              height={30}
              decoding="async"
              data-nimg={1}
              className="rounded-sm"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ffacebook.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Ffacebook.png&w=64&q=75 2x"
              src="/_next/image?url=%2Fimages%2Ffacebook.png&w=64&q=75"
            />
          </a>
          <a href="https://oa.zalo.me/ttcpqg" target="_blank">
            <img
              alt="zalo"
              loading="lazy"
              width={30}
              height={30}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Fzalo.webp&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fzalo.webp&w=64&q=75 2x"
              src="/_next/image?url=%2Fimages%2Fzalo.webp&w=64&q=75"
            />
          </a>
          <a
            href="https://www.youtube.com/@TrungtamChieuphimQuocgiaNCC"
            target="_blank"
          >
            <img
              alt="youtube"
              loading="lazy"
              width={30}
              height={30}
              decoding="async"
              data-nimg={1}
              className="rounded-sm"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Fyoutube2.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fyoutube2.png&w=64&q=75 2x"
              src="/_next/image?url=%2Fimages%2Fyoutube2.png&w=64&q=75"
            />
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <a
            href="https://play.google.com/store/apps/details?id=vn.com.chieuphimquocgia.app&hl=en_US"
            target="_blank"
          >
            <img
              alt="googlePlay"
              loading="lazy"
              width={140}
              height={38}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Fgoogleplay.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fgoogleplay.png&w=384&q=75 2x"
              src="/_next/image?url=%2Fimages%2Fgoogleplay.png&w=384&q=75"
            />
          </a>
          <a
            href="https://apps.apple.com/vn/app/chi%E1%BA%BFu-phim-qu%E1%BB%91c-gia-ncc/id6446946150"
            target="_blank"
          >
            <img
              alt="appStore"
              loading="lazy"
              width={130}
              height={38}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Fappstore.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fappstore.png&w=384&q=75 2x"
              src="/_next/image?url=%2Fimages%2Fappstore.png&w=384&q=75"
            />
          </a>
          <a href="http://online.gov.vn/Home/WebDetails/4519" target="_blank">
            <img
              alt="certification"
              loading="lazy"
              width={130}
              height={38}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Fcertification.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fcertification.png&w=384&q=75 2x"
              src="/_next/image?url=%2Fimages%2Fcertification.png&w=384&q=75"
            />
          </a>
        </div>
      </div>
      <div className="text-center space-y-2 text-xs md:text-base mb-6">
        <p>Cơ quan chủ quản: BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH</p>
        <p>Bản quyền thuộc Trung tâm Chiếu phim Quốc gia.</p>
        <p>
          Giấy phép số: 224/GP- TTĐT ngày 31/8/2010 - Chịu trách nhiệm: Vũ Đức
          Tùng – Giám đốc.
        </p>
        <p>
          Địa chỉ: 87 Láng Hạ, Quận Ba Đình, Tp. Hà Nội - Điện thoại:
          024.35141791
        </p>
      </div>
      <div className="text-center text-sm">
        Copyright 2023. NCC All Rights Reservered. Dev by
        {/* */}
        <a href="https://anvui.vn/">Anvui.vn</a>
      </div>
    </div>
  </footer>
  <div hidden="" id="S:0">
    <div className="swiper billboard-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018087.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018069.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018055.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017941.jpg&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide bg-primary relative">
          <div className="bg-primary xl:mt-20 mt-16 pb-4 md:pb-6 xl:pb-10">
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full block sm:hidden"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=3840&q=75"
            />
            <img
              alt="vnpay"
              loading="lazy"
              width={870}
              height={1160}
              decoding="async"
              data-nimg={1}
              className="object-contain h-auto w-full hidden sm:block"
              style={{ color: "transparent" }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017766.png&w=3840&q=75"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="min-h-screen w-screen relative xl:pt-[56.25%] wrapper bg-primary">
            <div className="hidden xl:block" />
            <img
              alt="movie"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover block xl:hidden brightness-[40%]"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=3840&q=75"
            />
            <div className="absolute top-[15%] text-white left-0 right-0 mx-auto z-30 w-full">
              <div className="mx-auto max-w-7xl">
                <div className="w-full px-12 xl:px-0 sm:w-[60%] xl:w-[40%]">
                  <p className="text-white text-xl sm:text-4xl h-full font-bold drop-shadow-xl">
                    HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Phụ đề
                  </p>
                  <div className="flex flex-wrap items-center mt-2 sm:mt-8 gap-x-5 text-sm sm:text-base">
                    <p>
                      Hoạt hình
                      {/* */}
                      {/* */}
                      2D
                    </p>
                    <p>Mỹ</p>
                    <p>
                      99
                      {/* */}
                      phút
                    </p>
                    <p>
                      Đạo diễn:
                      {/* */}
                      David G. Derrick Jr.
                    </p>
                  </div>
                  <p className="text-sm sm:text-base">
                    Diễn viên:
                    {/* */}
                    Auli 'i Cravalho, Dwayne Johnson, Alan Tudyk
                  </p>
                  <p className="mt-4 sm:mt-8 line-clamp-4 text-sm sm:text-base">
                    Moana bước vào cuộc hành trình đến những vùng biển đã mất
                    tích ở châu Đại Dương, theo tiếng gọi của tổ tiên.
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <div className="text-red-500 text-sm sm:text-base">
                      Kiểm duyệt:
                      {/* */}P - Phim được phép phổ biến đến người xem ở mọi độ
                      tuổi.
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base">
                        Khởi chiếu:
                        {/* */}
                        {/* */}
                        29/11/2024
                      </p>
                      <p className="text-sm sm:text-base">
                        Bạn đã xem bộ phim này? Đánh giá ngay
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-8">
                      <button
                        className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-110 transition-all duration-200 ease-in-out"
                        style={{ boxShadow: "0px 4px 40px 0px #A00F12" }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="mr-2"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                        Mua vé ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="min-h-screen w-screen relative xl:pt-[56.25%] wrapper bg-primary">
            <div className="hidden xl:block" />
            <img
              alt="movie"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover block xl:hidden brightness-[40%]"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=3840&q=75"
            />
            <div className="absolute top-[15%] text-white left-0 right-0 mx-auto z-30 w-full">
              <div className="mx-auto max-w-7xl">
                <div className="w-full px-12 xl:px-0 sm:w-[60%] xl:w-[40%]">
                  <p className="text-white text-xl sm:text-4xl h-full font-bold drop-shadow-xl">
                    CHIẾN ĐỊA TỬ THI-T18
                  </p>
                  <div className="flex flex-wrap items-center mt-2 sm:mt-8 gap-x-5 text-sm sm:text-base">
                    <p>
                      Kinh dị
                      {/* */}
                      {/* */}
                      2D
                    </p>
                    <p>Thái Lan</p>
                    <p>
                      105
                      {/* */}
                      phút
                    </p>
                    <p>
                      Đạo diễn:
                      {/* */}
                      Kongkiat Komesiri
                    </p>
                  </div>
                  <p className="text-sm sm:text-base">
                    Diễn viên:
                    {/* */}
                    Nonkul, Awat Ratanapintha, Supitcha Sangkhachinda, Akkarat
                    Nimitchai, Thawatchanin Darayon, Thanadol Auepong, Guntapat
                    Kasemsan Na Ayudhya, Seigi Ohzeki.
                  </p>
                  <p className="mt-4 sm:mt-8 line-clamp-4 text-sm sm:text-base">
                    Chiến Địa Tử Thi lấy bối cảnh miền Nam Thái Lan trong một
                    cuộc xâm lược ít được biết đến của quân đội Nhật Bản thời kỳ
                    Thế chiến 2. Mek (Nonkul) là một hạ sĩ quan trong quân đội
                    Thái Lan mang tình yêu lớn với đất nước, sẵn sàng hy sinh
                    thân mình vì đại cuộc. Ngược lại, người em trai Mok (Awat
                    Rattanaphinta) là một chàng trai trẻ thích tự do, không bao
                    giờ muốn trở thành một người lính như cha và anh trai mình.
                    Đối với Mok, việc tham gia chiến tranh giống như vứt bỏ mạng
                    sống một cách vô ích. Tuy nhiên, Mok không may bị nhiễm bệnh
                    và biến thành một xác sống đói ăn, điên loạn tấn công con
                    người. Cùng lúc đó, Mek nhận lệnh gia nhập một đơn vị bí ẩn
                    của Nhật Bản để truy lùng những người bị nhiễm bệnh, anh
                    nhận ra người em trai Mok nằm trong danh sách mục tiêu. Khi
                    đứng giữa tình thân và sự an nguy của đất nước, Mek sẽ đưa
                    ra lựa chọn như thế nào?
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <div className="text-red-500 text-sm sm:text-base">
                      Kiểm duyệt:
                      {/* */}
                      T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở
                      lên (18+)
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base">
                        Khởi chiếu:
                        {/* */}
                        {/* */}
                        29/11/2024
                      </p>
                      <p className="text-sm sm:text-base">
                        Bạn đã xem bộ phim này? Đánh giá ngay
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-8">
                      <button
                        className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-110 transition-all duration-200 ease-in-out"
                        style={{ boxShadow: "0px 4px 40px 0px #A00F12" }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="mr-2"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                        Mua vé ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="min-h-screen w-screen relative xl:pt-[56.25%] wrapper bg-primary">
            <div className="hidden xl:block" />
            <img
              alt="movie"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover block xl:hidden brightness-[40%]"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=3840&q=75"
            />
            <div className="absolute top-[15%] text-white left-0 right-0 mx-auto z-30 w-full">
              <div className="mx-auto max-w-7xl">
                <div className="w-full px-12 xl:px-0 sm:w-[60%] xl:w-[40%]">
                  <p className="text-white text-xl sm:text-4xl h-full font-bold drop-shadow-xl">
                    BLUE PERIOD-T16
                  </p>
                  <div className="flex flex-wrap items-center mt-2 sm:mt-8 gap-x-5 text-sm sm:text-base">
                    <p>
                      Tâm lý, tình cảm
                      {/* */}
                      {/* */}
                      2D
                    </p>
                    <p>Nhật bản</p>
                    <p>
                      115
                      {/* */}
                      phút
                    </p>
                    <p>
                      Đạo diễn:
                      {/* */}
                      Kentaro Hagiwara
                    </p>
                  </div>
                  <p className="text-sm sm:text-base">
                    Diễn viên:
                    {/* */}
                    Gordon Maeda; Fumiya Takahashi; Rihito Itagaki; Hiyori
                    Sakurada
                  </p>
                  <p className="mt-4 sm:mt-8 line-clamp-4 text-sm sm:text-base">
                    Dựa trên bộ manga ăn khách cùng tên của tác giả Yamaguchi
                    Tsubasa đã chiến thắng giải Manga Taisho năm 2020. Dưới vỏ
                    bọc của một nam sinh xuất sắc, Yatora Yaguchi luôn cố gắng
                    hết sức để làm hài lòng mọi người. Cậu chưa bao giờ cảm thấy
                    mình thật sự đang sống cho đến khi cậu bắt đầu vẽ bức tranh
                    về khung cảnh sáng sớm dưới màu xanh huyền ảo tại Shibuya.
                    Lần đầu tiên trong cuộc đời tăm tối của mình, Yatora nhận ra
                    được nhịp đập trái tim mạnh mẽ dành cho hội họa và nghệ
                    thuật. "Tôi không phải thiên tài, nhưng tôi sẽ phấn đấu cho
                    đến khi trở thành thiên tài!"
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <div className="text-red-500 text-sm sm:text-base">
                      Kiểm duyệt:
                      {/* */}
                      T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở
                      lên (16+)
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base">
                        Khởi chiếu:
                        {/* */}
                        {/* */}
                        29/11/2024
                      </p>
                      <p className="text-sm sm:text-base">
                        Bạn đã xem bộ phim này? Đánh giá ngay
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-8">
                      <button
                        className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-110 transition-all duration-200 ease-in-out"
                        style={{ boxShadow: "0px 4px 40px 0px #A00F12" }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="mr-2"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                        Mua vé ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="min-h-screen w-screen relative xl:pt-[56.25%] wrapper bg-primary">
            <div className="hidden xl:block" />
            <img
              alt="movie"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover block xl:hidden brightness-[40%]"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=3840&q=75"
            />
            <div className="absolute top-[15%] text-white left-0 right-0 mx-auto z-30 w-full">
              <div className="mx-auto max-w-7xl">
                <div className="w-full px-12 xl:px-0 sm:w-[60%] xl:w-[40%]">
                  <p className="text-white text-xl sm:text-4xl h-full font-bold drop-shadow-xl">
                    QUỶ TREO ĐẦU-T18
                  </p>
                  <div className="flex flex-wrap items-center mt-2 sm:mt-8 gap-x-5 text-sm sm:text-base">
                    <p>
                      Kinh dị
                      {/* */}
                      {/* */}
                      2D
                    </p>
                    <p>Thái Lan</p>
                    <p>
                      97
                      {/* */}
                      phút
                    </p>
                    <p>
                      Đạo diễn:
                      {/* */}
                      Bo Nipan Chawcharernpon
                    </p>
                  </div>
                  <p className="text-sm sm:text-base">
                    Diễn viên:
                    {/* */}
                    Khun Chanon Ukkharachata, Aniporn Chalermburanawong
                  </p>
                  <p className="mt-4 sm:mt-8 line-clamp-4 text-sm sm:text-base">
                    Petai &amp;Nicha - cặp đôi trẻ đẹp liên tục bị quấy phá sau
                    khi chuyển đến ngôi nhà gia truyền của Nicha.Từ những tiếng
                    động cót két chói tai đến những cái chết mất xác; tất cả đều
                    xuất phát từ một lời nguyền cổ xưa ma quái.
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <div className="text-red-500 text-sm sm:text-base">
                      Kiểm duyệt:
                      {/* */}
                      T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở
                      lên (18+)
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base">
                        Khởi chiếu:
                        {/* */}
                        {/* */}
                        29/11/2024
                      </p>
                      <p className="text-sm sm:text-base">
                        Bạn đã xem bộ phim này? Đánh giá ngay
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-8">
                      <button
                        className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-110 transition-all duration-200 ease-in-out"
                        style={{ boxShadow: "0px 4px 40px 0px #A00F12" }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="mr-2"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                        Mua vé ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="min-h-screen w-screen relative xl:pt-[56.25%] wrapper bg-primary">
            <div className="hidden xl:block" />
            <img
              alt="movie"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover block xl:hidden brightness-[40%]"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              sizes="100vw"
              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=3840&q=75 3840w"
              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=3840&q=75"
            />
            <div className="absolute top-[15%] text-white left-0 right-0 mx-auto z-30 w-full">
              <div className="mx-auto max-w-7xl">
                <div className="w-full px-12 xl:px-0 sm:w-[60%] xl:w-[40%]">
                  <p className="text-white text-xl sm:text-4xl h-full font-bold drop-shadow-xl">
                    NHÀ CÓ NĂM NÀNG DÂU SPECIALS 2-T13
                  </p>
                  <div className="flex flex-wrap items-center mt-2 sm:mt-8 gap-x-5 text-sm sm:text-base">
                    <p>
                      {/* */}
                      2D
                    </p>
                    <p>Nhật bản</p>
                    <p>
                      47
                      {/* */}
                      phút
                    </p>
                    <p>
                      Đạo diễn:
                      {/* */}
                      Masato Jinbo
                    </p>
                  </div>
                  <p className="text-sm sm:text-base">
                    Diễn viên:
                    {/* */}
                    Ayana Taketatsu, Ayane Sakura, Inori Minase, Kana Hanazawa,
                    Miku Itō, Yoshitsugu Matsuoka
                  </p>
                  <p className="mt-4 sm:mt-8 line-clamp-4 text-sm sm:text-base">
                    Anime Nhà Có 5 Nàng Dâu / Gotōbun no Hanayome Special 2 xoay
                    quanh chuyến du lịch của Futaro và 5 chị em nhà Nakano, cũng
                    là tuần trăng mật của Futaro và Yotsuba. Tưởng chừng chuyến
                    đi đã được lên kế hoạch một cách suôn sẻ nhưng rắc rối lại
                    xảy ra. Tập phim Honeymoon / Tuần trăng mật dựa trên ý tưởng
                    gốc của tác giả Haruba Negi và dưới sự giám sát hoàn toàn
                    của chính sensei. Phim kể về cuộc sống hàng ngày của Futaro
                    và năm chị em sinh năm khi đã trưởng thành! Futaro, người đã
                    thành công ở vai trò vừa hướng dẫn, vừa chinh phục năm chị
                    em nhà này. Cậu là gia sư xuất sắc giúp 5 chị em Nakano từ
                    zero và không hề thích học tập trở nên trưởng thành hơn, tốt
                    nghiệp hết cả 5. Mặc dù mỗi người đều đạt được ước mơ của
                    mình và đi theo con đường riêng, nhưng có vẻ như các cô gái
                    đều đang lo lắng chuyện gì đó... Giữa lúc này, Futaro và năm
                    chị em nhà Nakano lên kế hoạch cho một chuyến du lịch Hawaii
                    kiêm tuần trăng mật của họ. Việc chuẩn bị cho chuyến đi đang
                    suôn sẻ, một sự cố đã xảy ra, gây ra sự hoảng loạn lớn, tình
                    huống gấp rút! Và ngay cả ở Hawaii, điểm đến cho tuần trăng
                    mật, 6 người cũng bị cuốn vào rắc rối...!? Phim hài lãng mạn
                    về năm chị em sinh năm đáng yêu 500%, phiên bản tuần trăng
                    mật!!
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <div className="text-red-500 text-sm sm:text-base">
                      Kiểm duyệt:
                      {/* */}
                      T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở
                      lên (13+)
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base">
                        Khởi chiếu:
                        {/* */}
                        {/* */}
                        29/11/2024
                      </p>
                      <p className="text-sm sm:text-base">
                        Bạn đã xem bộ phim này? Đánh giá ngay
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-8">
                      <button
                        className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-110 transition-all duration-200 ease-in-out"
                        style={{ boxShadow: "0px 4px 40px 0px #A00F12" }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="mr-2"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                        Mua vé ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-y-1/2 z-40 flex items-center justify-between px-2">
        <div className="border border-gray-600 p-2 rounded-full cursor-pointer backdrop-blur-md hover:bg-white/20 bg-white/10">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className="absolute top-[50%] right-0 -translate-y-1/2 z-40 flex items-center justify-between px-2">
        <div className="border border-gray-600 p-2 rounded-full cursor-pointer backdrop-blur-md hover:bg-white/20 bg-white/10">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="pb-10 xl:pb-20 px-4 md:px-6 xl:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap xl:flex-nowrap gap-6">
          <div className="w-full xl:w-4/5">
            <div className="block xl:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-500 w-4 h-4" />
                  <h3 className="font-bold md:text-2xl">Phim đang chiếu</h3>
                </div>
                <a className="text-sm md:text-base underline" href="/movies">
                  Xem tất cả
                </a>
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="WICKED-K - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      WICKED-K - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="VENOM: THE LAST DANCE-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      VENOM: THE LAST DANCE-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="VÕ SĨ GIÁC ĐẤU II-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      VÕ SĨ GIÁC ĐẤU II-T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="MẬT MÃ ĐỎ-K - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      MẬT MÃ ĐỎ-K - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="ĐÔI BẠN HỌC YÊU-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      ĐÔI BẠN HỌC YÊU-T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="LINH MIÊU-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      LINH MIÊU-T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CƯỜI XUYÊN BIÊN GIỚI - T13 - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CƯỜI XUYÊN BIÊN GIỚI - T13 - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CHIẾN ĐỊA TỬ THI-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CHIẾN ĐỊA TỬ THI-T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="BLUE PERIOD-T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      BLUE PERIOD-T16
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="QUỶ TREO ĐẦU-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      QUỶ TREO ĐẦU-T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="NHÀ CÓ NĂM NÀNG DÂU SPECIALS 2-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      NHÀ CÓ NĂM NÀNG DÂU SPECIALS 2-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Lồng tiếng"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Lồng tiếng
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="HÀNH TRÌNH CỦA MOANA 2 (3D) -P - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      HÀNH TRÌNH CỦA MOANA 2 (3D) -P - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CÔNG TỬ BẠC LIÊU-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CÔNG TỬ BẠC LIÊU-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="TẾT ÂM HỒN- T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      TẾT ÂM HỒN- T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="MÈO MA BÊ THA - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      MÈO MA BÊ THA - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="TRAPEZIUM-T13- Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      TRAPEZIUM-T13- Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CÔNG TỬ BẠC LIÊU-T13 (Suất chiếu đặc biệt)"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CÔNG TỬ BẠC LIÊU-T13 (Suất chiếu đặc biệt)
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="block xl:hidden mt-14">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-500 w-4 h-4" />
                  <h3 className="font-bold md:text-2xl">
                    Liên hoan phim, Tuần phim
                  </h3>
                </div>
              </div>
              <div className="swiper mySwiper1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="GODZILLA -1.0-LHP NHẬT BẢN- T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      GODZILLA -1.0-LHP NHẬT BẢN- T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="GHÉP ĐÔI-LHP NHẬT BẢN-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      GHÉP ĐÔI-LHP NHẬT BẢN-T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="SAND LAND- LHP NHẬT BẢN- T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      SAND LAND- LHP NHẬT BẢN- T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CÁI ÁC KHÔNG TỒN TẠI-LHP NHẬT BẢN- K"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CÁI ÁC KHÔNG TỒN TẠI-LHP NHẬT BẢN- K
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="ALL THE LONG NIGHTS- LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      ALL THE LONG NIGHTS- LHP NHẬT BẢN-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="AKIRA-LHP NHẬT BẢN-T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      AKIRA-LHP NHẬT BẢN-T16
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="ĐI KARAOKE ĐI!-LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      ĐI KARAOKE ĐI!-LHP NHẬT BẢN-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="TÌNH TA ĐẸP TỰA ĐÓA HOA-LHP NHẬT BẢN-T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      TÌNH TA ĐẸP TỰA ĐÓA HOA-LHP NHẬT BẢN-T16
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="MẸ À?! -LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      MẸ À?! -LHP NHẬT BẢN-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="HAIKYU!!: Trận Chiến Bãi Phế Liệu-LHP NHẬT BẢN-P"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      HAIKYU!!: Trận Chiến Bãi Phế Liệu-LHP NHẬT BẢN-P
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="GODZILLA-LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      GODZILLA-LHP NHẬT BẢN-T13
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="block xl:hidden mt-14">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-500 w-4 h-4" />
                  <h3 className="font-bold md:text-2xl">Phim sắp chiếu</h3>
                </div>
              </div>
              <div className="swiper mySwiper1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="TẾT ÂM HỒN- T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      TẾT ÂM HỒN- T18
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="MÈO MA BÊ THA - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      MÈO MA BÊ THA - Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CÔNG TỬ BẠC LIÊU-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CÔNG TỬ BẠC LIÊU-T13
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="TRAPEZIUM-T13- Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      TRAPEZIUM-T13- Phụ đề
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="KÍNH VẠN HOA"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      KÍNH VẠN HOA
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="NHÀ GIA TIÊN"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      NHÀ GIA TIÊN
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="QUỲNH HOA NHẤT DẠ"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      QUỲNH HOA NHẤT DẠ
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="GIA ĐÌNH HOÀN HẢO"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      GIA ĐÌNH HOÀN HẢO
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="GÁI NGỐ GẶP MÀ LẦY"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      GÁI NGỐ GẶP MÀ LẦY
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="NGÀI QUỶ"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      NGÀI QUỶ
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="MUFASA: VUA SƯ TỬ"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      MUFASA: VUA SƯ TỬ
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="NHÍM SONIC 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      NHÍM SONIC 3
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="YÊU NHƯ LẦN ĐẦU"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      YÊU NHƯ LẦN ĐẦU
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="CAPTAIN AMERICA: THẾ GIỚI MỚI"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      CAPTAIN AMERICA: THẾ GIỚI MỚI
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="ĐỊA ĐẠO: MẶT TRỜI TRONG BÓNG TỐI"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      ĐỊA ĐẠO: MẶT TRỜI TRONG BÓNG TỐI
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="A MINECRAFT MOVIE"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      A MINECRAFT MOVIE
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="THÁM TỬ KIÊN: KỲ ÁN KHÔNG ĐẦU"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      THÁM TỬ KIÊN: KỲ ÁN KHÔNG ĐẦU
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                      <img
                        alt="BĂNG ĐẢNG QUÁI KIỆT 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="(min-width: 780px) 280px, 220px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=3840&q=75"
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                      BĂNG ĐẢNG QUÁI KIỆT 2
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="divide-y divide-gray-700 hidden xl:block">
              <div className="pb-16">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4" />
                    <h3 className="font-bold text-base xl:text-xl">
                      Phim đang chiếu
                    </h3>
                  </div>
                  <a className="text-sm xl:text-base underline" href="/movies">
                    Xem tất cả
                  </a>
                </div>
                <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="WICKED-K - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>22/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        WICKED-K - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="VENOM: THE LAST DANCE-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017667_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Khoa học viễn tưởng</p>
                        <p>25/10/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        VENOM: THE LAST DANCE-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018086_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hoạt hình</p>
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="VÕ SĨ GIÁC ĐẤU II-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017786_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hành động, Phiêu lưu, Tâm lý, tình cảm</p>
                        <p>15/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        VÕ SĨ GIÁC ĐẤU II-T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017787_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>28/10/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="MẬT MÃ ĐỎ-K - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017937_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hành động</p>
                        <p>08/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        MẬT MÃ ĐỎ-K - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="ĐÔI BẠN HỌC YÊU-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017968_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>08/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        ĐÔI BẠN HỌC YÊU-T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="LINH MIÊU-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017971_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>22/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        LINH MIÊU-T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CƯỜI XUYÊN BIÊN GIỚI - T13 - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018034_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hài</p>
                        <p>15/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CƯỜI XUYÊN BIÊN GIỚI - T13 - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CHIẾN ĐỊA TỬ THI-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018049_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Kinh dị</p>
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CHIẾN ĐỊA TỬ THI-T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="BLUE PERIOD-T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018066_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        BLUE PERIOD-T16
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="QUỶ TREO ĐẦU-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018068_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Kinh dị</p>
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        QUỶ TREO ĐẦU-T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="NHÀ CÓ NĂM NÀNG DÂU SPECIALS 2-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018067_0.jpeg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        NHÀ CÓ NĂM NÀNG DÂU SPECIALS 2-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Lồng tiếng"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018084_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hoạt hình</p>
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        HÀNH TRÌNH CỦA MOANA 2 (2D) -P - Lồng tiếng
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="HÀNH TRÌNH CỦA MOANA 2 (3D) -P - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018083_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hoạt hình</p>
                        <p>29/11/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        HÀNH TRÌNH CỦA MOANA 2 (3D) -P - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CÔNG TỬ BẠC LIÊU-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CÔNG TỬ BẠC LIÊU-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="TẾT ÂM HỒN- T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        TẾT ÂM HỒN- T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="MÈO MA BÊ THA - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hoạt hình</p>
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        MÈO MA BÊ THA - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="TRAPEZIUM-T13- Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        TRAPEZIUM-T13- Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hành động, Hoạt hình, Phiêu lưu</p>
                        <p>13/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CÔNG TỬ BẠC LIÊU-T13 (Suất chiếu đặc biệt)"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F10555_&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CÔNG TỬ BẠC LIÊU-T13 (Suất chiếu đặc biệt)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-16">
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4" />
                    <h3 className="font-bold text-base sm:text-xl">
                      Liên hoan phim, Tuần phim
                    </h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="GODZILLA -1.0-LHP NHẬT BẢN- T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018092_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>13/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        GODZILLA -1.0-LHP NHẬT BẢN- T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="GHÉP ĐÔI-LHP NHẬT BẢN-T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018095_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>14/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        GHÉP ĐÔI-LHP NHẬT BẢN-T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="SAND LAND- LHP NHẬT BẢN- T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018094_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>14/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        SAND LAND- LHP NHẬT BẢN- T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CÁI ÁC KHÔNG TỒN TẠI-LHP NHẬT BẢN- K"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018102_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>14/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CÁI ÁC KHÔNG TỒN TẠI-LHP NHẬT BẢN- K
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="ALL THE LONG NIGHTS- LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018101_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>14/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        ALL THE LONG NIGHTS- LHP NHẬT BẢN-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="AKIRA-LHP NHẬT BẢN-T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018096_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>15/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        AKIRA-LHP NHẬT BẢN-T16
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="ĐI KARAOKE ĐI!-LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018098_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>15/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        ĐI KARAOKE ĐI!-LHP NHẬT BẢN-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="TÌNH TA ĐẸP TỰA ĐÓA HOA-LHP NHẬT BẢN-T16"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018097_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>15/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        TÌNH TA ĐẸP TỰA ĐÓA HOA-LHP NHẬT BẢN-T16
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="MẸ À?! -LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018099_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>16/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        MẸ À?! -LHP NHẬT BẢN-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="HAIKYU!!: Trận Chiến Bãi Phế Liệu-LHP NHẬT BẢN-P"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018100_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>21/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        HAIKYU!!: Trận Chiến Bãi Phế Liệu-LHP NHẬT BẢN-P
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="GODZILLA-LHP NHẬT BẢN-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018093_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>28/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        GODZILLA-LHP NHẬT BẢN-T13
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4" />
                    <h3 className="font-bold text-base sm:text-xl">
                      Phim sắp chiếu
                    </h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="TẾT ÂM HỒN- T18"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018065_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        TẾT ÂM HỒN- T18
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="MÈO MA BÊ THA - Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018073_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hoạt hình</p>
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        MÈO MA BÊ THA - Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CÔNG TỬ BẠC LIÊU-T13"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017849_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CÔNG TỬ BẠC LIÊU-T13
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="TRAPEZIUM-T13- Phụ đề"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018108_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>06/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        TRAPEZIUM-T13- Phụ đề
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="KÍNH VẠN HOA"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017789_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hài, Phiêu lưu</p>
                        <p>12/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        KÍNH VẠN HOA
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="NHÀ GIA TIÊN"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017788_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hài</p>
                        <p>12/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        NHÀ GIA TIÊN
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="QUỲNH HOA NHẤT DẠ"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016553_0.jpeg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Cổ trang, dã sử</p>
                        <p>12/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        QUỲNH HOA NHẤT DẠ
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="GIA ĐÌNH HOÀN HẢO"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018077_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Tâm lý, tình cảm</p>
                        <p>13/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        GIA ĐÌNH HOÀN HẢO
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017883_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hành động, Hoạt hình, Phiêu lưu</p>
                        <p>13/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN: CUỘC CHIẾN CỦA ROHIRRIM
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="GÁI NGỐ GẶP MÀ LẦY"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018107_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>13/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        GÁI NGỐ GẶP MÀ LẦY
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="NGÀI QUỶ"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018106_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>13/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        NGÀI QUỶ
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="MUFASA: VUA SƯ TỬ"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017670_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>20/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        MUFASA: VUA SƯ TỬ
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="NHÍM SONIC 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017885_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hoạt hình</p>
                        <p>27/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        NHÍM SONIC 3
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="YÊU NHƯ LẦN ĐẦU"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>30/12/2024</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        YÊU NHƯ LẦN ĐẦU
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="CAPTAIN AMERICA: THẾ GIỚI MỚI"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017784_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Phiêu lưu</p>
                        <p>14/02/2025</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        CAPTAIN AMERICA: THẾ GIỚI MỚI
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="ĐỊA ĐẠO: MẶT TRỜI TRONG BÓNG TỐI"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017974_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>04/04/2025</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        ĐỊA ĐẠO: MẶT TRỜI TRONG BÓNG TỐI
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="A MINECRAFT MOVIE"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017850_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Hành động, Phiêu lưu</p>
                        <p>04/04/2025</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        A MINECRAFT MOVIE
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="THÁM TỬ KIÊN: KỲ ÁN KHÔNG ĐẦU"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017973_0.jpg&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p>Kinh dị</p>
                        <p>16/05/2025</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        THÁM TỬ KIÊN: KỲ ÁN KHÔNG ĐẦU
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-lg">
                    <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="BĂNG ĐẢNG QUÁI KIỆT 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="230px"
                        srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=3840&q=75 3840w"
                        src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018112_0.png&w=3840&q=75"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                        <p />
                        <p>01/08/2025</p>
                      </div>
                      <p className="mt-2 text-sm xl:text-base font-bold">
                        BĂNG ĐẢNG QUÁI KIỆT 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/5 space-y-10">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold xl:text-xl">Khuyến mãi</h3>
                <a
                  className="text-sm md:text-base underline"
                  href="/promotions"
                >
                  Xem tất cả
                </a>
              </div>
              <div className="hidden xl:block mt-4 h-[420px]">
                <div className="swiper mySwiper3">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="promotions"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=3840&q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="block xl:hidden mt-4">
                <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017769.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            01/08/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            RA MẮT BỎNG MIX VỊ - GIÁ KHÔNG ĐỔI
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017760.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            29/07/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            SIÊU ƯU ĐÃI ĐỒNG GIÁ BỎNG, NƯỚC NGÀY THỨ 3, THỨ 4
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017735.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            19/07/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            ƯU ĐÃI ĐẶC BIỆT THỨ 2 - THỨ 3 - THỨ 4 HÀNG THÁNG
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            01/07/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            31/01/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            THẺ U22 ƯU ĐÃI GIÁ VÉ CHO HỌC SINH, SINH VIÊN
                            55.000Đ/VÉ 2D
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017333.png&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            28/09/2022
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            SPECIAL MONDAY - ĐỒNG GIÁ 50.000Đ/VÉ 2D THỨ 2 CUỐI
                            THÁNG{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            04/09/2019
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            SIÊU ƯU ĐÃI “PHIM THẬT HAY - COMBO THẬT ĐÃ” CHÍNH
                            THỨC TRỞ LẠI
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            23/04/2019
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            XEM PHIM HAY HƯỞNG NGAY ƯU ĐÃI “ĂN THẢ GA – CHƠI CỰC
                            ĐÃ”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold xl:text-xl">Sự kiện</h3>
                <a className="text-sm md:text-base underline" href="/news-list">
                  Xem tất cả
                </a>
              </div>
              <div className="hidden xl:block mt-4 h-[420px]">
                <div className="swiper mySwiper3">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=3840&q=75"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                        <img
                          alt="news-list"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover hover:scale-110 transition object-center"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent"
                          }}
                          sizes="247px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=3840&q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="block xl:hidden mt-4">
                <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017918.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            03/10/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            Chương trình phim kỉ niệm nhân dịp 70 năm Giải phòng
                            Thủ đô
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017855.png&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            13/09/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            VUI TẾT TRUNG THU - RINH QUÀ VI VU
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017847.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            09/09/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            Chương trình "Suất chiếu đặc biệt "lần đầu tiên diễn
                            ra tại Trung tâm Chiếu phim Quốc gia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017829.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            04/09/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            SUẤT CHIẾU ĐẶC BIỆT - QUÀ TẶNG TƯNG BỪNG - GIÁ VÉ
                            KHÔNG ĐỔI
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017814.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            21/08/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            Đợt phim Kỷ niệm 79 năm Cách mạng tháng 8
                            (19/8/1945- 19/8/2024) và Quốc Khánh nước Cộng hòa
                            xã hội chủ nghĩa Việt Nam (2/9/1945- 2/9/2024) tại
                            Trung tâm Chiếu phim Quốc gia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017773.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            04/08/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            Tuyển dụng cộng tác viên soát vé dẫn chỗ, bán vé tại
                            Trung tâm Chiếu phim Quốc gia{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017734.jpg&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            16/07/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            THÔNG BÁO HOÀN THÀNH KHẢO SÁT CƠ SỞ VẬT CHẤT NĂM
                            2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="card"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent"
                            }}
                            sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017732.png&w=3840&q=75"
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm md:text-base text-gray-500">
                            12/07/2024
                          </p>
                          <p className="text-sm md:text-base line-clamp-2">
                            REVIEW PHIM HOẠT HÌNH HOT NHẤT HÈ NÀY - KẺ TRỘM MẶT
                            TRĂNG 4
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img
                alt="ads"
                loading="lazy"
                width={256}
                height={450}
                decoding="async"
                data-nimg={1}
                className="object-contain h-auto w-full rounded-lg cursor-pointer"
                style={{ color: "transparent" }}
                sizes="100vw"
                srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=3840&q=75 3840w"
                src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017801.png&w=3840&q=75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default App
