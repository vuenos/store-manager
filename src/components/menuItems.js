const menuItems = [
  {
    title: "대시보드",
    path: "/dashboard",
    desc: "주문 및 상품 관련 정보와 매출통계를 한눈에 확인할 수 있어요"
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
        path: "/product/manage/goods",
        desc: "상품별, 쇼핑몰별로 상품을 조회하고 관리할 수 있어요"
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