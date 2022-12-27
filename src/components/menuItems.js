const menuItems = [
  {
    title: "대시보드",
    isAdmin: "true",
    isSubAdmin: "true",
    path: "/dashboard",
    desc: "주문 및 상품 관련 정보와 매출통계를 한눈에 확인할 수 있어요"
  },
  {
    title: "상품",
    id: 1,
    isAdmin: "true",
    isSubAdmin: "true",
    subMenu: [
      {
        title: "상품 등록",
        parentPath: "/product/",
        path: "/product/register"
      },
      {
        title: "상품 가져오기",
        parentPath: "/product/",
        path: "/product/import"
      },
      {
        title: "상품 관리",
        parentPath: "",
        path: "/product/manage/goods",
        desc: "상품별, 쇼핑몰별로 상품을 조회하고 관리할 수 있어요"
      },
      {
        title: "템플릿 등록",
        parentPath: "",
        path: "/product/template/register"
      },
      {
        title: "템플릿 관리",
        parentPath: "",
        path: "/product/template/manage"
      },
    ]
  },
  {
    title: "주문",
    id: 2,
    isAdmin: "false",
    isSubAdmin: "true",
    subMenu: [
      {
        title: "주문 관리",
        parentPath: "/order/",
        path: "/order/list"
      },
      {
        title: "클레임 관리",
        parentPath: "order",
        path: "/order/claim"
      },
      {
        title: "전체 주문 조회",
        parentPath: "/order",
        path: "/order/all"
      }
    ]
  },
  {
    title: "CS",
    isAdmin: "true",
    isSubAdmin: "true",
    path: "/cs/qnaList"
  },
  {
    title: "작업관리",
    isAdmin: "true",
    isSubAdmin: "true",
    path: "/schedule"
  }
]

export { menuItems }