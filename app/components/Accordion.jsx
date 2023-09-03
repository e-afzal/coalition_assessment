"use client";

// COMPONENT CREATED FOR "CLIENT" FAQ SECTION
import * as Accordion from "@radix-ui/react-accordion";

// STYLES
import styles from "@/public/styles/components/accordion.module.scss";

const AccordionComp = () => {
  const categories = [
    {
      name: "mountain 1",
      schedule: [
        { date: "25 Nov 2016", description: "Vestibulum Viverra" },
        { date: "28 Nov 2016", description: "Vestibulum Viverra" },
        { date: "18 Dec 2016", description: "Vestibulum Viverra" },
        { date: "07 Jan 2017", description: "Vestibulum Viverra" },
      ],
    },
    {
      name: "mountain 2",
      schedule: [
        { date: "26 Nov 2016", description: "Vestibulum Viverra" },
        { date: "29 Nov 2016", description: "Vestibulum Viverra" },
        { date: "22 Dec 2016", description: "Vestibulum Viverra" },
        { date: "18 Jan 2017", description: "Vestibulum Viverra" },
      ],
    },
  ];
  return (
    <Accordion.Root
      id={styles.accordion_container}
      collapsible
      defaultValue={"mountain 1"}
    >
      {categories.map((each, index) => (
        <Accordion.Item value={each.name} key={index}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordion_trigger}>
              {each.name}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.accordion_content}>
            <ul>
              {each.schedule.map((eachItem, index) => (
                <li key={index}>
                  <p>{eachItem.date}</p>
                  <p>{eachItem.description}</p>
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionComp;
