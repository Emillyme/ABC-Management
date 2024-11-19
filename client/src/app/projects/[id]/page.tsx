"use client"

import React, { useState } from 'react'
import ProjectHeader from "@/app/projects/ProjectHeader"

type Props = {
    params: {id: string}
}

function Project({ params }: Props) {
    const { id } = params;
    const [activeTab, setAcitveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <>
        {/* <ProjectHeader activeTab={activeTab} setAcitveTab={setAcitveTab} /> */}
        {/* { activeTab === "Board" && (
            <Board/>
        )} */}
    </>
  )
}

export default Project;