import Link from "next/link";
import Layout from "@/pages/components/Layout";
import Image from "next/image";
import SideBarBlog from "../SideBarBlog";
import HighPay from "../HighPay";

export default function Blog() {
   
  

    return (
        <Layout>
            <div className="mx-auto container xl:max-w-[1230px] px-4 py-4 md:mt-40">
                
       
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <Link href="/" className=" text-[#EE1E24] hover:text-red-500">Home</Link>
                    <span>&gt;</span>
                    <Link href="/blog" className=" text-[#EE1E24] hover:text-red-500">Blog</Link>
                    <span>&gt;</span>
                    <span className="text-[#282529]">Top High-Paying Job In India 2025 Edition</span>
                </nav>

      
            

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
           
                    <SideBarBlog />
                  

        
                    <main className="lg:col-span-9">
                        
                <HighPay />
                    </main>

                </div>
            </div>
        </Layout>
    );
}