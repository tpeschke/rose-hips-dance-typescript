"use client";
import { Fragment, useState } from "react";
import "./classes.css";
import ClassCard from "./components/classCard";
import Spacer from "./components/divider";
import BackgroundImages from "../../components/backgroundImages/backgroundImages";
import classInfo, { ClassInfoInterface } from "./utilities/classInfo";
import ImageShell from "../../components/ImageShell/ImageShell";
import { useLocation } from "react-router-dom";
import Seo from "../../seo/Seo";
import { classesJsonLd } from "../../seo/structuredData";

type FilterOptions = "inPerson" | "online" | "oneOnOne" | null

export default function Classes() {
  const { hash } = useLocation();

  const [filter, setFilter] = useState<FilterOptions>(null);

  // const changeFilter = (newFilter: "inPerson" | "online" | "oneOnOne") => {
  //   if (newFilter === filter) {
  //     setFilter(null);
  //   } else {
  //     setFilter(newFilter);
  //   }
  // };

  const secondSectionIndexAddOn = !filter ? classInfo.inPerson.length : 0;
  // const oneOnOneIndexAddOn = !filter
  //   ? secondSectionIndexAddOn + classInfo.online.length
  //   : 0;

  const sections = hash === '#online' ?
    [
      ClassOptionsBySection(filter, "online", "Online", "online", classInfo.online, 0),
      ClassOptionsBySection(filter, "inPerson", "In Person", "in-person", classInfo.inPerson, secondSectionIndexAddOn)
    ]
    :
    [
      ClassOptionsBySection(filter, "inPerson", "In Person", "in-person", classInfo.inPerson, 0),
      ClassOptionsBySection(filter, "online", "Online", "online", classInfo.online, secondSectionIndexAddOn)
    ]

  return (
    <div className="classes">
      <Seo
        title="Classes | Rose Hips Dance — Belly Dance & Movement in Ogden, UT"
        description="Explore Rose Hips Dance classes: in-person Belly Dance for the Soul in Ogden, Utah and online Morning Movement (Qigong). All ages, body types, and experience levels welcome."
        path="/classes"
        jsonLd={classesJsonLd}
      />
      <BackgroundImages />
      {/* <div className="filter-buttons">
        <button
          onClick={(_) => changeFilter("inPerson")}
          className={`${lemonade.className} antialiased transparent ${
            filter === "inPerson" && "on"
          }`}
        >
          In Person
        </button>
        <button
          onClick={(_) => changeFilter("online")}
          className={`${lemonade.className} antialiased transparent ${
            filter === "online" && "on"
          }`}
        >
          Online
        </button>
      </div> */}
      <>
        {sections.map((section, index) => {
          return (
            <Fragment key={index}>
              {section}
            </Fragment>
          )
        })}
      </>
      <div className="spacer"></div>
    </div>
  );
}

function ClassOptionsBySection(
  filter: FilterOptions,
  filterString: string,
  content: string,
  id: string,
  sectionClasses: ClassInfoInterface[],
  secondSectionIndexAddOn: number
) {
  return (
    <>
      {(!filter || filter === filterString) && (
        <>
          {formatHeader(content, id)}
          {sectionClasses.map((classDetails, index) => (
            <Fragment key={classDetails.title}>
              <ClassCard classDetails={classDetails} isOdd={(secondSectionIndexAddOn + index) % 2 === 1} />
              {index !== classInfo.inPerson.length - 1 && <Spacer />}
            </Fragment>
          ))}
        </>
      )}
    </>
  )
}

function formatHeader(content: string, id: string) {
  return (
    <span className="filter-header" id={id ?? content}>
      <ImageShell src="star" alt="star" width={25} height={25} />
      <h2>{content}</h2>
      <ImageShell src="star" alt="star" width={25} height={25} />
    </span>
  );
}
