const menuItems = [
  {
    title: "대시보드",
    isAdmin: "true",
    isSubAdmin: "true",
    eventKey: "dashboard",
    path: "/dashboard"
  },
  {
    title: "상품",
    eventKey: "product",
    id: "product",
    isAdmin: "true",
    isSubAdmin: "true",
    subMenu: [
      {
        title: "상품 등록",
        eventKey: "/product/register",
        path: "/product/register"
      },
      {
        title: "상품 가져오기",
        eventKey: "/product/import",
        path: "/product/import"
      },
      {
        title: "상품 관리",
        eventKey: "/product/manage/goods",
        path: "/product/manage/goods"
      },
      {
        title: "템플릿 등록",
        eventKey: "/product/template/register",
        path: "/product/template/register"
      },
      {
        title: "템플릿 관리",
        eventKey: "/product/template/manage",
        path: "/product/template/manage"
      },
    ]
  },
  {
    title: "주문",
    eventKey: "order",
    id: "order",
    isAdmin: "false",
    isSubAdmin: "true",
    subMenu: [
      {
        title: "주문 관리",
        eventKey: "/order/list",
        path: "/order/list"
      },
      {
        title: "클레임 관리",
        eventKey: "/order/claim",
        path: "/order/claim"
      },
      {
        title: "전체 주문 조회",
        eventKey: "/order/all",
        path: "/order/all"
      }
    ]
  },
  {
    title: "CS",
    eventKey: "cs",
    isAdmin: "true",
    isSubAdmin: "true",
    path: "/cs/qnaList"
  },
  {
    title: "작업관리",
    eventKey: "schedule",
    isAdmin: "true",
    isSubAdmin: "true",
    path: "/schedule"
  }
]

export { menuItems }