const Data = {
    Checkbox: {
        usage: `
        class Component = () => {
          this.test = true;
          return (
            <div>
              <Checkbox label="Check me!" />
              <Checkbox label="Check me!" />
              <Checkbox label="Check me!" />
            </div>
          );
        }`,
        examples: [
            {
                label: "'Check'",
                disabled: true
            },
            {
                label: "'Check2'",
            }
        ]
    }
}

export default Data;