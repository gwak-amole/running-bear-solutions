import FAQTemplate from "./FAQtemplate";

const FAQSection = () => {
    return(
        <section id="faq" className="flex flex-col bg-purple-100 py-10">
            <h1 className="mx-auto text-2xl font-bold my-4">Frequently Asked Questions</h1>
            <FAQTemplate question="What treatments do you do?" answer="See the 'services' section"/>
            <FAQTemplate question="Where do you operate?" answer="El Paso County, TX and Doña Ana Otero Counties, New Mexico" />
            <FAQTemplate question="How much does it cost?" answer="Typically $50 for most homes. Call me to find out." />
            <FAQTemplate question="Do you do contracts?" answer="No." />
            <FAQTemplate />
        </section>
    );
}

export default FAQSection