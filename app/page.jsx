"use client";
import Preview from "@/components/Preview";
import Search from "@/components/Search";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg">
      {/* Gradient Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
        GitHub User Finder
      </h1>

      {/* Search Component */}
      <div>
        <Search setData={setData} setIsLoading={setIsLoading} />
      </div>

      {/* Preview Component */}
      <div>
        <Preview
          avatarUrl={data.avatar_url}
          blog={data.blog}
          email={data.email}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={isLoading}
          bio={data.bio}
          joinedAt={data.created_at?.split("T")[0]}
        />
      </div>
    </div>
  );
}

export default App;
