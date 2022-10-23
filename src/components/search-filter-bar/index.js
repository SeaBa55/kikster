import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";

const SearchFilterBarComponent = () => {
  return (
    <>
      <div className="my-3 row text-center">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 text-nowrap">
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
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-nowrap border-1 border boder-danger">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              PROJECT TYPE
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-nowrap border-1 text-nowrap border-1 border boder-danger">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            CITY
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        </div>

      </div>
    </>
  );
};

export default SearchFilterBarComponent;
