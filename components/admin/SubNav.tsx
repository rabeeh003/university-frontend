import React from 'react';

interface BaseNavProps {
    title: string;
    children: React.ReactNode;
    breadcrumb: React.ReactNode;
}

const SubNav: React.FC<BaseNavProps> = ({ title, children, breadcrumb }) => {
    return (
        <div className="sticky top-0 bg-muted p-4 rounded-md shadow-md z-40">
            <div className='flex items-center justify-between'>
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">{title}</span>
                </div>
                <div className="flex items-center space-x-4">
                    {children}
                </div>
            </div>
            <div>
                {breadcrumb}
            </div>
        </div>
    );
};

export default SubNav;
