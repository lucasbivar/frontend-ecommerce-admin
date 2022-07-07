import React, { useEffect, useState} from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../actions';
import {Layout} from "../../components/Layout";
import {Input} from "../../components/UI/Input";

export const Category = (props) => {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    const form = new FormData();
    if (categoryName === "") {
      alert('Category name is required');
      setShow(false);
      return;
    
    }
    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);
   
    dispatch(addCategory(form));
    setCategoryName('');
    setParentCategoryId('');
    setShow(false);
    window.location.reload();

  };

  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");


  useEffect(() => {
    dispatch(getAllCategory());
    console.log(category.categories)
  }, []);

  const category = useSelector(state => state.category);
  
  const renderCategories = (categories) => {

    let myCategories = [];

    for(let category of categories){
      myCategories.push(
        <li key={category.name}>
          {category.name}
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      );
    }

    return myCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for(let category of categories){
      options.push({value: category._id, name: category.name});
      if(category.children.length > 0){
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  return(
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <h3>
                Category
              </h3>
              <button onClick={handleShow}>
                Add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              {renderCategories(category.categories)}
            </ul>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input 
            value={categoryName}
            placeholder={`Category Name`}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <select className='form-control' value={parentCategoryId} onChange={(e) => setParentCategoryId(e.target.value)}>
            <option>Select Category</option>
            {
              createCategoryList(category.categories).map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>)
            }
          </select>
          <input type="file" name="categoryImage" onChange={handleCategoryImage} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );

};