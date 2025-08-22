import React from "react";
type Props ={
    children: React.ReactNode;
    sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
    return (
        <section>
            <h1>NotesLayout</h1>
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </section>
    );
};

export default NotesLayout;