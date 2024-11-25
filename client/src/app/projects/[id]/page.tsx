"use client"

import React, { useState, use } from 'react'
import ProjectHeader from "@/app/projects/ProjectHeader"

type Props = {
    params: {id: string}
}

const Project = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <>
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* { activeTab === "Board" && (
            <Board/>
        )} */}
    </>
  )
}

export default Project;