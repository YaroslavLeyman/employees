import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Employee } from "@prisma/client";
import { Row } from "antd";
import { EmployeeForm } from "../../components/employee-form/EmployeeForm";
import { Layout } from "../../components/layout/Layout";
import { selectUser } from "../../features/auth/authSlice";
import { useAddEmployeeMutation } from "../../app/serivices/employees";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import { Paths } from "../../paths";

export const AddEmployee = () => { 
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState("");
  const [addEmployee] = useAddEmployeeMutation();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleAddEmployee = async (data: Employee) => {
    try {
      await addEmployee(data).unwrap();

      navigate(`${Paths.status}/created`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          onFinish={handleAddEmployee}
          title="Добавить сотрудника"
          btnText="Добавить"
          error={error}
        />
      </Row>
    </Layout>
  );
};
