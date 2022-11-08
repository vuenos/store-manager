import Link from "next/link";
import Image from "next/image";
import biConnect from '/public/assets/media/logos/bi-connect.svg';

const Aside = () => {
  return (
    <div
      id="kt_app_sidebar" className="app-sidebar flex-column bg-white border-end"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="250px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      <div
        className="app-sidebar-logo d-none d-lg-flex flex-stack flex-shrink-0 mt-4 px-8 h-50px"
         id="kt_app_sidebar_logo">
        <Link href="/">
          <a><Image alt="Logo" src={biConnect} width={135} height={30} priority={true} className="h-30px"/></a>
        </Link>
      </div>
      <div className="text-center fs-12">셀러허브 커넥트 CBT</div>
    </div>
  )
}
export default Aside;