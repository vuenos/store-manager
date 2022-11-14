const menuItems = [
  {
    title: "대시보드",
    path: "/dashboard",
  },
  {
    title: "상품",
    id: 1,
    subMenu: [
      {
        title: "상품 등록",
        path: "/product/register"
      },
      {
        title: "상품 가져오기",
        path: "/product/import"
      },
      {
        title: "상품 관리",
        path: "/product/manage/goods"
      },
      {
        title: "템플릿 등록",
        path: "/product/template/register"
      },
      {
        title: "템플릿 관리",
        path: "/product/template/manage"
      },
    ]
  },
  {
    title: "주문",
    id: 1,
    subMenu: [
      {
        title: "주문 관리",
        path: "/order/list"
      },
      {
        title: "클레임 관리",
        path: "/order/claim"
      },
      {
        title: "전체 주문 조회",
        path: "/order/all"
      }
    ]
  },
  {
    title: "CS",
    path: "/cs/qnaList"
  }
]

export { menuItems }