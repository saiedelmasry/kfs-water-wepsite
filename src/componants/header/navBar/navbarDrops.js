import { Dropdown, NavDropdown } from "react-bootstrap";
import "./navbar.css";
function NavBarDrops() {
  return (
    <>
      <NavDropdown
        title="من نحن"
        id="basic-nav-dropdown"
        align="end"
        show="false"
      >
        <NavDropdown.Item href="#action/3.1">نبذه عن الشركه</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"> مجلس الاداره</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">الجمعيه العامه</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">انجازات الشركه</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">
          الشفافيه والنزاهه{" "}
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        show="false"
        title="الجوده"
        id="basic-nav-dropdown"
        align="end"
      >
        <NavDropdown.Item href="#action/3.1">المعامل والجوده</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          {" "}
          تنقيه مياه الشرب
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          معالجه مياه الصرف
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">
          {" "}
          السلامه والصحه المهنيه
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        show="false"
        title="الخدمات"
        id="basic-nav-dropdown"
        align="end"
      >
        <NavDropdown.Item href="#action/3.1">خدمه العملاء</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          تسجيل قراءه العداد
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">الفواتير</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">تطبيق قرائتي</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">تطبيق 125</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> المناقصات</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">
          الشكاوي والمقترحات
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        show="false"
        title="المكتبه"
        id="basic-nav-dropdown"
        align="end"
      >
        <NavDropdown.Item href="#action/3.1">مكتبه الصور</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"> مكتبه الفيديو</NavDropdown.Item>
        <Dropdown show="false" className="nasted">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            عروض تقديميه
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              التوعيه وخدمه المجتمع
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2"> افاق 2020</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavDropdown>
      <NavDropdown
        title="تواصل معنا"
        id="basic-nav-dropdown"
        align="end"
        show="false"
      >
        <NavDropdown.Item href="#action/3.1"> تواصل معنا </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          {" "}
          دليل هاتف فروع الشركه{" "}
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
export default NavBarDrops;
