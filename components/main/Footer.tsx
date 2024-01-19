import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/Anarchist4" target="_blank" rel="noopener noreferrer">
                        <span className="text-[15px] ml-[6px]">Github</span>   
                        </a> 
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <a href="https://twitter.com/kashanNps" target="_blank" rel="noopener noreferrer">
                        <span className="text-[15px] ml-[6px]">Twitter</span> 
                        </a>   
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <a href="https://www.linkedin.com/in/kashanabdullah/" target="_blank" rel="noopener noreferrer">
                        <span className="text-[15px] ml-[6px]">Linkedin</span>   
                        </a> 
                    </p>
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">kashanabdullah19@gmail.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">Contact Number: +923164305897</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; DataFusionNest 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
