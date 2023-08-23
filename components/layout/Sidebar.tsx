'use client';
import Link from 'next/link';
import React from 'react';
import { BiMoon } from 'react-icons/bi';
import { CiCalendar, CiCircleList, CiViewBoard } from 'react-icons/ci';
import { FcTemplate } from 'react-icons/fc';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';
import { BiColorFill } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
type Props = {};

type OptionProps = {
  icon: React.ReactNode;
  text: string;
};

// data
// const colors = ['bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-red-500'];

const colors = [
  {
    id: 1,
    color: 'bg-green-500',
    isCheck: true,
  },
  {
    id: 2,
    color: 'bg-blue-500',
    isCheck: false,
  },
  {
    id: 3,
    color: 'bg-yellow-500',
    isCheck: false,
  },
  {
    id: 4,
    color: 'bg-red-500',
    isCheck: false,
  },
];

export function replaceSpaceWithDash(str: string) {
  return str.replace(/\s/g, '-');
}

export function lowercase(str: string) {
  return str.toLowerCase();
}

export function getUrl(str: string) {
  return `/${lowercase(replaceSpaceWithDash(str))}`;
}

const optionClass =
  'option icon-text hover:text-light hover:bg-dark rounded-md transition duration-150 px-2 py-1 w-full';

const Option: React.FC<OptionProps> = ({ icon, text }) => {
  const url = getUrl(text);
  return (
    <Link
      className={optionClass}
      href={url}
    >
      {icon}
      <span className='capitalize text-sm'>{text}</span>
    </Link>
  );
};

const Sidebar = (props: Props) => {
  const [theme, setTheme] = React.useState(colors);
  function handleSearch(value: string) {
    console.log(value);
  }
  function handleSetTheme(id: number) {
    const newColors = colors.map((color) => {
      if (color.id === id) {
        return {
          ...color,
          isCheck: true,
        };
      }
      return {
        ...color,
        isCheck: false,
      };
    });
    setTheme(newColors);
  }
  return (
    <div className={`sidebar w-56 bg-gray-100 p-3`}>
      <div className='logo icon-text'>
        <FcTemplate
          size={20}
          className=''
        />
        TODO APP
      </div>
      <div className='search py-3'>
        <input
          type='text'
          className='w-full px-2 py-1 rounded-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm'
          onChange={(e) => handleSearch(e.target.value)}
          placeholder='Search'
        />
      </div>
      <div className='features space-y-2'>
        <Option
          icon={<CiViewBoard size={20} />}
          text='overview'
        />
        <div className='flex items-center justify-between'>
          <Option
            icon={<CiCalendar size={20} />}
            text='calendar'
          />
        </div>
        <Option
          icon={<CiCircleList size={20} />}
          text='to do list'
        />
      </div>
      <div className='py-6'>
        <hr className='border-t-gray-400' />
      </div>

      <div className='custom space-y-2'>
        <div className={`flex items-center justify-between`}>
          <div className={optionClass}>
            <BiColorFill size={20} />
            <span className='text-sm'>Theme</span>
          </div>
          <div className='flex items-center flex-shrink-0 flex-grow-0 gap-2'>
            {theme.map((color) => (
              <button
                key={color.id}
                className={`${color.color} rounded-full w-4 h-4`}
                onClick={() => handleSetTheme(color.id)}
              >
                {color.isCheck && <AiOutlineCheck className='' />}
              </button>
            ))}
          </div>
        </div>
        <Option
          icon={<BiMoon size={20} />}
          text='dark mode'
        />
        <Option
          icon={<TbLayoutSidebarLeftCollapse size={20} />}
          text='collapsed'
        />
      </div>
      <div className='py-6'>
        <hr className='border-t-gray-400' />
      </div>
      <div className='settings'></div>
    </div>
  );
};

export default Sidebar;
