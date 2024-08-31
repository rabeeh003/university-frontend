"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";
import { fetchCourses } from "@/lib/redux/reduceres/admin";
import SubNav from "@/components/admin/SubNav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PlusIcon, SlashIcon } from "lucide-react";
import { CreateCourse } from "@/components/admin/course/CreateCourse";
import { CreateDepartment } from "@/components/admin/course/CreateDepartment";
import { CreateSem } from "@/components/admin/course/CreateSem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import adminAPI from "@/utils/axios/admin";

interface Course {
  id: number;
  name: string;
  icon: string;
  qualification: string;
  duration: number;
  description: string;
  url: string;
}

interface Department {
  id: number;
  name: string;
  description: string;
  course: string;
  is_active: boolean;
  url: string;
}

export default function Course() {
  const dispatch = useAppDispatch();
  const { courses, loading, error } = useAppSelector(
    (state: RootState) => state.admin
  );

  const [status, setStatus] = React.useState({
    depLoading: false,
    depError: null
  })
  const [departments, setDepartments] = React.useState<Department[] | null>(null)
  const [fillteredDep, setFillteredDep] = React.useState<Department[] | null>(null)

  const [selection, setSelection] = React.useState<{ course: string, department: number | null }>({
    course: '',
    department: null,
  })

  useEffect(() => {
    if (selection.course && departments) {
      setFillteredDep(departments.filter(dep => dep.course === selection.course))
      console.log(departments, "departments");
    }
    if (courses && selection.course === '') {
      setSelection({
        ...selection,
        course: courses[0].url,
      })
    }
    if (fillteredDep && fillteredDep.length > 0 && selection.department === null) {
      setSelection({
        ...selection,
        department: fillteredDep[0].id,
      })
    }
  }, [selection.course, departments, courses])

  useEffect(() => {
    if (fillteredDep && fillteredDep.length > 0) {
      setSelection({
        ...selection,
        department: fillteredDep[0].id,
      })
    }
  }, [fillteredDep])

  useEffect(() => {
    if (!courses) {
      dispatch(fetchCourses())
    }
    if (!departments) {
      adminAPI.get('/education/departments/').then(async res =>  {
        const data: Department[] = res.data.results;
        setDepartments(data);
        setStatus({
          ...status,
          depLoading: false,
          depError: null
        });
      }).catch(err => {        setStatus({
          ...status,
          depLoading: false,
          depError: err.message
        })
      })
    }
  }, [dispatch, courses]);

  return (
    <main>
      <SubNav
        title="Course"
        breadcrumb={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/cdcs">Course</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      >
        <div></div>
      </SubNav>
      <div className="w-full h-full bg-muted mt-3 p-3 rounded-md grid grid-cols-12  gap-4">
        <section className="bg-background col-span-12 md:col-span-6 xl:col-span-3 p-4 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Courses</h2>
            <div className="px-2 py-1 rounded-lg">
              <CreateCourse />
            </div>
          </div>
          {loading && <p>Loading courses...</p>}
          {error && <p>Error loading courses.</p>}
          {!loading && !error && courses && (
            <ul>
              {courses.map((course: Course) => (
                <li
                  style={selection.course === course.url ? { background: "#86aabf" } : {}}
                  onClick={() =>
                    setSelection({
                      ...selection,
                      course: course.url || '',
                      department: null,
                    })
                  }
                  className="flex cursor-pointer mt-2 gap-2 items-center p-1 py-2 rounded-sm bg-slate-100 dark:bg-slate-800"
                  key={course.id}
                >
                  <Avatar>
                    <AvatarImage src={course.icon} alt={course.name} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {course.name}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-background p-4 col-span-12 md:col-span-6 xl:col-span-3 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Departments</h2>
            <div className="px-2 py-1 rounded-lg">
              <CreateDepartment />
            </div>
          </div>
          {status.depLoading && <p>Loading courses...</p>}
          {status.depError && <p>Error loading courses.</p>}
          {!status.depLoading && !status.depError && departments && (
            <ul>
              {fillteredDep?.map((dep: Department) => (
                <li
                  style={selection.department === dep.id ? { background: "#86aabf" } : {}}
                  onClick={() =>
                    setSelection({
                      ...selection,
                      department: dep.id,
                    })
                  }
                  className="mt-2 p-2 rounded-sm bg-slate-100 dark:bg-slate-800"
                  key={dep.id}
                >
                  {dep.name}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-background p-4 col-span-12 md:col-span-3 xl:col-span-2 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Sem</h2>
            <button className="px-2 py-1 rounded-lg">
              <CreateSem />
            </button>
          </div>
        </section>

        <section className="bg-background p-4 col-span-12 md:col-span-9 xl:col-span-4 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Syllabus</h2>
            <button className="px-2 py-1 rounded-lg">
              <PlusIcon />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}