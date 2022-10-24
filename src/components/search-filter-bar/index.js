import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";

const SearchFilterBarComponent = () => {
  return (
    <>
      <div className="my-3 row d-flex justify-content-center text-center">
        <div className="col-12 col-md-8 col-lg-4 mt-3">
          <InputGroup>
            <Form.Control
              className="border-1  "
              placeholder="Keyword"
              aria-label="Search by keyword"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-success" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
        <div className="col-12 col-md-6 d-inline-flex">
          <div className="col-6 mt-3 me-3 text-lg-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              <span className="px-1">PROJECT TYPE</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-6 mt-3 text-lg-start">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="px-1">FILTER BY CITY</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilterBarComponent;
