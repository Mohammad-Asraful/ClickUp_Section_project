import React from "react";

import { BsRocketTakeoff } from "react-icons/bs";
import { TbNetwork } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { TbTopologyStar } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import { GrTroubleshoot } from "react-icons/gr";

const Help = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-5">
        <div>
          {/* heading start */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Need help?</h1>
            <p>How can we help you today?</p>
          </div>
          {/* heading end */}

          {/* cards start */}
          <div className="grid grid-cols-3 items-center justify-center gap-5">
            <div className="text-center px-12 py-16 flex items-center justify-center flex-col shadow-md">
              <div>
                <BsRocketTakeoff className="text-blue-600 text-6xl mb-3" />
              </div>
              <h3 className="text-2xl">Getting Started</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                odit!
              </p>
            </div>
            {/*  */}
            <div className="text-center px-12 py-16 flex items-center justify-center flex-col shadow-md">
              <div>
                <TbNetwork className="text-blue-600 text-6xl mb-3" />
              </div>
              <h3 className="text-2xl">Getting Started</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                odit!
              </p>
            </div>
            {/*  */}
            <div className="text-center px-12 py-16 flex items-center justify-center flex-col shadow-md">
              <div>
                <AiOutlineSetting className="text-blue-600 text-6xl mb-3" />
              </div>
              <h3 className="text-2xl">Getting Started</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                odit!
              </p>
            </div>
            {/*  */}
            <div className="text-center px-12 py-16 flex items-center justify-center flex-col shadow-md">
              <div>
                <TbTopologyStar className="text-blue-600 text-6xl mb-3" />
              </div>
              <h3 className="text-2xl">Getting Started</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                odit!
              </p>
            </div>
            {/*  */}
            <div className="text-center px-12 py-16 flex items-center justify-center flex-col shadow-md">
              <div>
                <RiBillLine className="text-blue-600 text-6xl mb-3" />
              </div>
              <h3 className="text-2xl">Getting Started</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                odit!
              </p>
            </div>
            {/*  */}
            <div className="text-center px-12 py-16 flex items-center justify-center flex-col shadow-md">
              <div>
                <GrTroubleshoot className="text-6xl mb-3" />
              </div>
              <h3 className="text-2xl">Getting Started</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                odit!
              </p>
            </div>
            {/*  */}
          </div>
          {/* cards end */}
        </div>
      </div>
    </section>
  );
};

export default Help;
