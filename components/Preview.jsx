"use client";
import Link from "next/link";
import React from "react";

function Preview({
  avatarUrl,
  name,
  login,
  public_repos,
  followers,
  following,
  location,
  twitter,
  email,
  isLoading,
  bio,
  joinedAt,
}) {
  return (
    <div className="bg-dark-gray p-5 flex text-white justify-center rounded-md">
      {!isLoading ? (
        <div className="flex flex-col gap-6">
          {/* User Info Section */}
          <div className="flex gap-10 items-center">
            <div>
              <img
                className="w-28 rounded-full"
                src={avatarUrl}
                alt={`${name}'s avatar`}
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
              <h3 className="text-dark-blue text-lg">@{login}</h3>
              <p className="text-sm text-gray-300">Joined on {joinedAt}</p>
            </div>
          </div>

          {/* Bio Section */}
          {bio && (
            <div>
              <p className="max-w-xs text-gray-200">{bio}</p>
            </div>
          )}

          {/* Repositories, Followers, Following */}
          <div className="flex bg-dark-bg p-3 gap-10 rounded-md justify-around">
            <div className="text-center">
              <h3 className="text-sm">Repositories</h3>
              <span className="font-bold">{public_repos}</span>
            </div>
            <div className="text-center">
              <h3 className="text-sm">Followers</h3>
              <span className="font-bold">{followers}</span>
            </div>
            <div className="text-center">
              <h3 className="text-sm">Following</h3>
              <span className="font-bold">{following}</span>
            </div>
          </div>

          {/* GitHub Profile Button */}
          <div className="text-center">
            <Link
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-2 rounded transition duration-300">
                Visit GitHub Profile
              </button>
            </Link>
          </div>
          <div className="mt-[-1rem] text-center">
            <Link href={`/contact-us`} rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-2 rounded transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="rounded-full h-4 w-4 border-4 border-dark-blue border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default Preview;
