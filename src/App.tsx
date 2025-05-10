import { Navbar } from "./components/Navbar";
import { TopHeader } from "./components/TopHeader";
import { SearchInput } from "./components/SearchInput";
import { HotMagazine } from "./components/HotMagazine";
import { NewMagazine } from "./components/NewMagazine";
import { BlogsComponent } from "./components/BlogsComponent";
import { OldBlogs } from "./components/OldBlogs";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container max-w-[1400px] pt-30 lg:pt-19 mx-auto bg-[#F8F8F8]">
        <div className="hidden lg:block">
          <TopHeader />
        </div>
        <SearchInput />
        <div className="block lg:hidden">
          <TopHeader />
        </div>
        <HotMagazine />
        <NewMagazine />
        <BlogsComponent />
        <OldBlogs />
        <Pagination />
      </div>
      <div className="bg-[#F8F8F8]">
        {" "}
        <Footer />
      </div>
    </>
  );
}

export default App;
