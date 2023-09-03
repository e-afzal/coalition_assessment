"use client";

import * as Tabs from "@radix-ui/react-tabs";

// STYLES
import styles from "@/public/styles/components/tabs.module.scss";

const TabsRadix = () => {
  const categoryTabs = [
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

  // HANDLERS
  // const getTabClicked = (e) => {};

  return (
    <Tabs.Root className={styles.TabsRoot} defaultValue='mountain 1'>
      <Tabs.List className={styles.TabsList}>
        {/* TAB BUTTONS */}
        {categoryTabs.map((tab, index) => (
          <Tabs.Trigger
            key={index}
            className={styles.TabsTrigger}
            value={tab.name}
            aria-valuetext={tab.name}
            // onClick={(e) => getTabClicked(e)}
          >
            {tab.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* TABS CONTENTS */}
      <div className={styles.content_container}>
        {categoryTabs.map((tab, index) => (
          <Tabs.Content
            key={index}
            className={styles.TabsContent}
            value={tab.name}
          >
            <div className={styles.schedule_container}>
              <h3>schedule</h3>
              <ul>
                {tab.schedule.map((each, index) => (
                  <li key={index}>
                    <p>{each.date}</p>
                    <p>{each.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
};

export default TabsRadix;
