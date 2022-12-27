import React , { useEffect, useState } from 'react';
import {Card, Col, Row} from "react-bootstrap";
//import apiClient from '../../services/api';

const Search = (children) => {

	const [searchOptionToggle , setToggle] = useState(true);

	useEffect(() => {
		console.log(searchOptionToggle);
	},[searchOptionToggle]);


	const changeToggle = () => {
		setToggle(!searchOptionToggle);
	}

	const {search} = children;

	// try{
	//     // const { data, status } = apiClient.get("/sellers/mall-accounts");
	//     const { data, status } = apiClient.post("/sellers/login", {id:"6666666666",pwd:"0000"})
	//     console.log(data, status);
	// }catch(error) {
	//     console.log(error);
	// }

	return (

		<Card className="mb-5 search-table ls-065em" id="serchTable">

			<Card.Header className="card-header px-7 py-5 min-h-auto border-bottom-0 flex-nowrap">

				<Row className="row align-items-center w-100">

					<Col className="col-xl-1">
						<div className="fs-6 fw-boldest mt-3 mb-3">검색어</div>
					</Col>

					<Col className="col-lg-11 d-flex align-items-center position-relative my-1 ps-5">
						<input
							className="form-control form-control-sm w-lg-50 ps-3"
							type="text"
							id="searchWord"
							name="searchWord"
							placeholder="검색어 입력"
						/>
					</Col>

				</Row>

				<div
					className={'collapsible cursor-pointer rotate '+ (searchOptionToggle? 'active' :'')}
					onClick={() => changeToggle()}
				>
					<div className="card-toolbar rotate-180">
							<span className="svg-icon svg-icon-1">
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 8L11 13L16 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
							</span>
					</div>
				</div>

			</Card.Header>

			<div id="searchTab" className={'collapse ' + (searchOptionToggle ? 'active' : '')}>

				<Card.Body className="p-7 pt-0">

					<div className="border-gray-300 border-bottom border-bottom-solid mb-5"></div>

					<Row className="row mb-5 align-items-center">

						<Col className="col-xl-1">
							<div className="fs-6 fw-boldest mt-3 mb-3">{search[0].title}</div>
						</Col>

						<Col
							className="dateBtnBox d-flex btn-group col-xl-5 nav-group nav-group-fluid my-1"
							role="group"
							aria-label="날짜 선택"
						>
							<label data-kt-button="true" htmlFor="selRangeDay0">
								<input
									className="btn-check selDay"
									type="radio"
									name="selRangeDay"
									id="selRangeDay0"
									value="0"
								/>
								<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">오늘</span>
							</label>

							<label data-kt-button="true" htmlFor="selRangeDay7">
								<input
									className="btn-check selDay"
									type="radio"
									name="selRangeDay"
									id="selRangeDay7"
									value="7"
								/>
								<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">7일</span>
							</label>

							<label data-kt-button="true" htmlFor="selRangeDay15">
								<input
									className="btn-check selDay"
									type="radio"
									name="selRangeDay"
									id="selRangeDay15"
									value="15"
								/>
								<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">15일</span>
							</label>

							<label data-kt-button="true" htmlFor="selRangeDay1m">
								<input
									className="btn-check selDay"
									type="radio"
									name="selRangeDay"
									id="selRangeDay1m"
									value="1m"
								/>
								<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">1개월</span>
							</label>

							<label data-kt-button="true" htmlFor="selRangeDayall">
								<input
									className="btn-check selDay"
									type="radio"
									name="selRangeDay"
									id="selRangeDayall"
									value="all"
									defaultChecked={true}
								/>
								<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">전체</span>
							</label>
						</Col>

						<Col className="d-flex position-relative align-items-center col-lg-2">
							<input
								type="text"
								name="sdate"
								id="sdate"
								className="form-control form-control-sm fs-7 ps-3 flatpickr-input btn-outline-secondary" placeholder="From"
								readOnly
							/>
							<span className="svg-icon position-absolute ms-4 mb-1 svg-icon-2 right-20px">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor"></path>
													<path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor"></path>
													<path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor"></path>
											</svg>
										</span>
						</Col>

						<Col className="d-flex position-relative align-items-center col-lg-2 my-1">
							<input
								type="text"
								name="edate"
								id="edate"
								className="form-control form-control-sm fs-7 ps-3 flatpickr-input btn-outline-secondary"
								placeholder="To"
								readOnly
							/>
							<span className="svg-icon position-absolute ms-4 mb-1 svg-icon-2 right-20px">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor"></path>
														<path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor"></path>
														<path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor"></path>
											</svg>
										</span>
						</Col>

					</Row>

					<Row className="row mb-5 align-items-center">

						<Col className="col-xl-1">
							<div className="fs-6 fw-boldest mt-3 mb-3">{search[1].title}</div>
						</Col>

						<Col className="col-lg-11 ps-1">
							<div className="navbar justify-content-start p-0">
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey38" value="38" />
										<label htmlFor="linkageKey38" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/smartstore.png" alt="" className="" width="24" />
												<span className="mx-2">ncp_1nvgzv_01</span>
										</label>
								</div>
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey454" value="454" />
										<label htmlFor="linkageKey454" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/coupang.png" alt="" className="" width="24" />
												<span className="mx-2">sechannel</span>
										</label>
								</div>							
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey737" value="737" />
										<label htmlFor="linkageKey737" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/gmarket.png" alt="" className="" width="24" />
												<span className="mx-2">tpffjgjqm6</span>
										</label>
								</div>
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey735" value="735" />
										<label htmlFor="linkageKey735" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/auction.png" alt="" className="" width="24" />
												<span className="mx-2">sellerhub06</span>
										</label>
								</div>
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey553" value="553" />
										<label htmlFor="linkageKey553" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/st11.png" alt="" className="" width="24" />
												<span className="mx-2">sechannel</span>
										</label>
								</div>
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey8" value="8" />
										<label htmlFor="linkageKey8" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/talkstore.png" alt="" className="" width="24" />
												<span className="mx-2">test</span>
										</label>
								</div>							
								<div className="form-check-inline form-check-solid mb-2 me-2">
										<input type="checkbox" className="btn-check" name="linkageKey[]" id="linkageKey849" value="849" />
										<label htmlFor="linkageKey849" className="btn btn-outline fw-normal btn-outline-white btn-active-secondary p-2 d-flex align-items-center btn-sm h-34px">
												<img src="/assets/media/icons/sho.png" alt="" className="" width="24" />
												<span className="mx-2">6666666666</span>
										</label>
								</div>
							</div>
						</Col>

					</Row>

					{search[2] 
						? <Row className="row align-items-center">

								<Col className="col-xl-1">
									<div className="fs-6 fw-boldest mt-3 mb-3">{search[2].title}</div>
								</Col>

								
									<Col
										className="d-flex btn-group col-xl-5 nav-group nav-group-fluid my-1"
										role="group"										
									>
										<label data-kt-button="true" htmlFor="answered_all">
											<input
												className="btn-check"
												type="radio"
												name="answered"
												id="answered_all"			
												defaultChecked={true}									
											/>
											<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">전체</span>
										</label>

										<label data-kt-button="true" htmlFor="answered_0">
											<input
												className="btn-check"
												type="radio"
												name="answered"
												id="answered_0"											
											/>
											<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">미답변</span>
										</label>

										<label data-kt-button="true" htmlFor="answered_1">
											<input
												className="btn-check"
												type="radio"
												name="answered"
												id="answered_1"												
											/>
											<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">답변완료</span>
										</label>

										<label data-kt-button="true" htmlFor="answered_2">
											<input
												className="btn-check"
												type="radio"
												name="answered"
												id="answered_2"														
											/>
											<span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-3 border rounded-0 h-34px">전송완료</span>
										</label>
									</Col>								

							</Row> 
						: '' 
					}

				</Card.Body>

			</div>

			<Card.Footer className="px-7 py-5 border-top-0 pt-0">

				<div className="border-gray-300 border-bottom border-bottom-solid mb-5"></div>

				<Col className="col-lg-12">
					<button type="button" className="btn btn-white me-3">초기화</button>
					<button type="submit" className="btn btn-primary"><i className="fas fa-search"></i> 검색</button>
				</Col>

			</Card.Footer>

		</Card>

	)
}

export default Search;