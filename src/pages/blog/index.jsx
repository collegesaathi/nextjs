import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";

export default function Blog() {
 

    return (
        <Layout>
            <div className="mx-auto container xl:max-w-[1230px] px-2 py-4 md:mt-20">
                
      <BlogHero />
      <BlogGrid />
             

            </div>
        </Layout>
    );
}