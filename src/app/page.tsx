"use client";
import { AddForm, DynamicButton, Modal, Card } from "@/components";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [data, setdata] = useState([]);
  return (
    <>
      <div>
        <Modal setUser={setdata} />
        <Card user={data} setdata={setdata} />
      </div>
    </>
  );
}
