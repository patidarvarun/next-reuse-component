import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./component/HomePage";
import Page2 from "./component/Page2";
import ButtonComponent from "./reuse_component/ButtonComponent";
import SideNavBar from "./reuse_component/SideNavBar";
import TransactionHistory from "./reuse_component/TransactionHistory";

export default function Home() {
  return (
    <div className="">
      <HomePage />
      {/* <TransactionHistory /> */}
      {/* <Page2 /> */}
      {/* <ButtonComponent /> */}
    </div>
  );
}
