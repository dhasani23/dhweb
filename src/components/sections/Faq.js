import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQs",
    rows: [
        {
            title: "What do you tutor?",
            content: "We focus on tutoring for the SAT and ACT, but also tutor most other subjects at all levels, including high school math, science, and english.",
        },
        {
            title: "How much do you charge?",
            content: "We charge $32/hr (much less than what other tutoring companies usually charge: $70/hr). And remember: we only get paid if your performance improves!",
        },
        {
            title: "What does a typical tutoring session look like?",
            content: `A typical session is 1.5 hours on Zoom, where you and David go through practice problems, key concepts, proven study tips, and more.
                      We also assign 1-2 hours of tailored practice problems each week to ensure you meet your goals.`
        },
        {
            title: "How can I contact you?",
            content: `DH Tutoring can be reached through the "I'm interested" button above or <b>dhtutoringhelp@gmail.com</b>`
        }
    ],
};

const styles = {
    bgColor: "rgba(52,52,52,alpha)",
    titleTextColor: "white",
    rowTitleColor: "rgba(255,255,255,1)",
    rowContentColor: "rgba(255,255,255,1)",
    arrowColor: "white",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

export default function App() {

    return (
        <div style={{maxWidth:900, display:"flex", width: "100%", justifyContent: "center", margin:"auto"}}>
            <br />
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}