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
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className=" w-full px-3 pt-30 lg:pt-19  min-h-screen">
        <div className="max-w-[1400px] mx-auto">
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
      </div>
    </div>
  );
}

export default App;
