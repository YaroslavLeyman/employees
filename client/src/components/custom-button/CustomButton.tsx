import React from "react";
import { Form, Button } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "primary" | "link" | "text" | "ghost" | "default" | "dashed";
  danger?: boolean;
  loading?: boolean;
  shape?: "circle" | "default" | "round" | undefined;
  icon?: React.ReactNode;
  className?: string;
};

export const CustomButton = ({
  children,
  type,
  danger,
  loading,
  htmlType = 'button',
  onClick,
  shape,
  icon,
  className
}: Props) => {
  return (
    <Form.Item>
      <Button
        type={type}
        htmlType={htmlType}
        danger={danger}
        loading={loading}
        size="large"
        shape={ shape }
        onClick={ onClick }
        icon={ icon }
        className={ className }
      >
        {children}
      </Button>
    </Form.Item>
  );
};