import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
	
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            These are some of the projects We've worked on in the past.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <span>SOON</span>
                </div>
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                Dress Me Up
              </h2>
              <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                Mobile App using Flutter and ML models
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                A virtual wardrobe app for fashion lovers driven by Al. The
                software might make suggestions for clothing depending on the
                user's personal style, body type, and the occasion using
                computer vision and machine learning algorithms to assist users
                in organizing their closets. The software allowed users to
                upload pictures of their clothing, and the app automatically
                categorized and tagged the photos for convenient browsing. The
                software could also interface with e-commerce sites to enable
                users to make purchases directly from the app and offer
                real-time outfit recommendations based on the user's location
                and weather information. Social sharing, wardrobe planning, and
                individualized style guidance from fashion professionals could
                all be added features. The app may leverage computer vision,
                machine learning, and API integration technologies.
              </p>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>SOON</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Blood Finder
                </h2>
                <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                  Mobile App using Flutter and Laravel
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  An application that serves as a platform for blood donors and
                  those in need of blood to connect and communicate with each
                  other, facilitating the process of finding suitable blood
                  donors in times of urgency.
                </p>
              </article>
            </Card>

            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>Aug 20223</span>
                  </div>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Med Reminder
                </h2>
                <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                  Mobile App using Flutter
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A mobile app that reminds you to take your medication on time
                  and also has a feature to call your doctor in case you need
                  help. If you want to see nearby pharmacies, you can use the
                  app to find them. The app will also remind you when your
                </p>
              </article>
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>March 2023</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  FitMentorHub
                </h2>
                <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                  Mobile App using Flutter
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  An app that connects gym coaches with individuals seeking
                  guidance and training. Coaches can upload demo videos
                  showcasing their expertise and offer their services, while
                  users can browse and choose the coach they want to hire for
                  personalized training.
                </p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>May 2023</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  TailorEase
                </h2>
                <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                  Mobile App using Flutter
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  An app that serves both tailors and regular customers,
                  allowing customers to order custom-made clothing and fabrics
                  while also booking tailoring services. Tailors can use the
                  platform to offer their services and sell products such as
                  clothing and fabric.
                </p>
              </article>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>Dec 2022</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Musaf
                </h2>
                <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                  Mobile App using Android Java
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Android app, developed using Java and an offline machine
                  learning model built with TensorFlow, seamlessly integrates
                  spirituality with technology. It features advanced facial
                  expression recognition, allowing users to receive personalized
                  guidance and comfort from the Holy Quran based on their
                  emotions and needs. Alongside this unique feature, users can
                  read, listen to, and recite Quranic verses, delve into a vast
                  repository of Ahadees (Hadiths), and find daily inspiration
                  through a selection of Ayat (verses) and Ahadees. Despite its
                  cutting-edge technology, the app operates offline, ensuring
                  accessibility and privacy, making it an indispensable tool for
                  spiritual seekers.
                </p>
              </article>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>Dec 2022</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  FlockMaster
                </h2>
                <h2 className="mt-1 text-1xl font-semibold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                  Mobile App using Flutter
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  An application designed for poultry farm owners to efficiently
                  manage their chicken breeds, create and track feed schedules,
                  and schedule vaccinations for their poultry.
                </p>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
