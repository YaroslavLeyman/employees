import React from "react";
import { Layout as AntLayout } from "antd";
import { Header } from "../header/Header";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};
