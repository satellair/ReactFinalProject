import type { Meta } from './metadata'

export interface CoursesList {
  data: Course[];
  meta: Meta;
}

export interface Course {
  ch_id: number;
  course_id: number;
  ch_title: string;
  ch_dateadd: Date;
  ch_timetotal: string;
  ch_view: number;
  ch_url: string;
}
