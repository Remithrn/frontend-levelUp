import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Divider,CardBody,CardHeader } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { adminlogin } from '../features/authentication/AuthSlice';
import { Navigate, Link } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const { error, isAuthenticated, loading } = useSelector((state) => state.auth);

  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case 'email':
        if (!value.trim()) {
          errorMessage = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = "Email is invalid";
        }
        break;
      case 'password':
        if (!value.trim()) {
          errorMessage = "Password is required";
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  useEffect(() => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      if (touched[field]) {
        const errorMessage = validateField(field, formData[field]);
        if (errorMessage) {
          newErrors[field] = errorMessage;
        }
      }
    });
    setErrors(newErrors);
  }, [formData, touched]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const errorMessage = validateField(field, formData[field]);
      if (errorMessage) {
        newErrors[field] = errorMessage;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      try {
        await dispatch(adminlogin(formData)).unwrap();
      } catch (err) {
        // Handle server-side errors
        if (err && typeof err === 'object') {
          setErrors(prevErrors => ({
            ...prevErrors,
            ...err,
            non_field_errors: err.non_field_errors || err.detail
          }));
        } else {
          setErrors(prevErrors => ({
            ...prevErrors,
            non_field_errors: 'An unexpected error occurred. Please try again.'
          }));
        }
      }
    } else {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    }
  };

  

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" />;;
  }

  const hasError = (field) => errors[field] && errors[field].length > 0;

  return (
    <div className='flex justify-center'>
      <Card className="w-2/3">
        <CardBody>
          <CardHeader className="flex flex-col">
            <h4 className="font-bold">Level Up</h4>
          </CardHeader>
          <Divider />
          <h3 className="text-2xl text-default-500 text-center mb-1">Admin Login</h3>

          {errors.non_field_errors && (
            <p color="error" className="text-center mb-4 text-red-500">{errors.non_field_errors}</p>
          )}
          <form className="mb-3" onSubmit={handleLogin}>
            <div className="mb-3">
              <Input
                name="email"
                value={formData.email}
                
                onChange={handleInputChange}
                onBlur={() => setTouched({ ...touched, email: true })}
                type="email"
                label="Email"
                isInvalid={hasError("email")}
                errorMessage={errors.email}
              />
            </div>
            <div className="mb-3">
              <Input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={() => setTouched({ ...touched, password: true })}
                type="password"
                label="Password"
                isInvalid={hasError("password")}
                errorMessage={errors.password}
              />
            </div>
            <div className="d-grid gap-2 justify-center">
              <Button 
                className='btn-custom-green'
                type="submit" 
                disabled={loading || Object.keys(errors).length > 0}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          </form>
          <div className="d-grid gap-2 mt-2">
           
          </div>
        
        </CardBody>
      </Card>
    </div>
  );
};

export default AdminLogin;