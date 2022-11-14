import React from 'react';
import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-4 d-flex flex-lg-column py-12">
      <div className="container mw-sm-100">
        <div className="copyright text-center my-auto fs-7 ">
          <span className="fw-bold me-1">{t('common.copy')}</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;