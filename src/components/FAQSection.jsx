import FAQTemplate from "./FAQtemplate";

const FAQSection = () => {
    return(
        <div className="flex flex-col mb-20 bg-purple-100 py-10">
            <h1 className="mx-auto text-2xl font-bold my-4">Frequently Asked Questions</h1>
            <FAQTemplate question="What treatments do you do?" answer="See the 'services' section"/>
            <FAQTemplate question="Where do you operate?" answer="El Paso, TX and New Mexico" />
            <FAQTemplate question="How much does it cost?" answer="Call me to find out!" />
            <FAQTemplate question="Why would I do that?" answer="Idk" />
            <FAQTemplate />
        </div>
    );
}

export default FAQSection