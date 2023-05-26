import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/mr_biscuit_site/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../../components/plasmic/pro_layout_panel_landing_pgae/PlasmicGlobalVariant__Screen";
import { PlasmicUnstyledget } from "../../components/plasmic/mr_biscuit_site/PlasmicUnstyledget";
import { useRouter } from "next/router";

async function getUserIP() {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
}

function Unstyledget() {
  const [value, setValue] = React.useState("");
const [errorMsg, setErrorMsg] = React.useState("");
const [successMsg, setSuccessMsg] = React.useState("");

  const handleClick = async () => {
    const licenseKey = value;
    let instanceName = await getUserIP(); // This should be a unique identifier for the user (e.g., their username or user ID)

    fetch("https://api.lemonsqueezy.com/v1/licenses/activate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJmNWUzODczMGM5NWE1NmEzOGExMWRhMGZjOWI0YjU3OTJhY2NiZDg1ZmM1NjIxMDcwYTdiYjY2MTQzOTY5YjZlZjk4YThmOTM2ZjhkNGU4MyIsImlhdCI6MTY4Mzc1MjQxMS4yNTA2NjgsIm5iZiI6MTY4Mzc1MjQxMS4yNTA2NywiZXhwIjoxNzE1Mzc0ODExLjI0MjQ5Niwic3ViIjoiMTkxMzI0Iiwic2NvcGVzIjpbXX0.qvZWLHDauT7_toed_HDXk3uRPLHCMxwBFuOXxyTNjYFP9Vyly0w2xMLjqxh515mc_uA1QCoEzsNi3C4DU7PgDrTQmEkU4lufAdnGM3JjWvvI3jCEnu8Co7csGmoI2dVsD-WZ8FTJoqKBYnTO7pKVIUwzhOfXqncg815ZoORI4WrGjrXUxjFs5RK9Ax9nVquERnAmOJK-k7A-sFpI_B4BGQ5j36J7h0rl1iE8qyVbyfJDo1_tKj0DPk_X7NV6dJoyWhhabCODMbTfcSx-NR0TZ5wrZbt96xm_UoDLIKYRQlX0pXfbWvTgm8F3DwEnZx-sv_dA6olTWxQXDl95RfKxMmhLfGx85H5ZtP-jWa35YFhqeQnDKUZ9xjLBnt7TCDv-1OYfMNJGyxmvcjJsCdvm1kgSFZZ8saqq-iBb6HUSFxAAsktLOTlnwELPq-7PI-VdmzR9wFDSzALHSuZhq-nqcJrE9TkYIY8NwCBEVDLWmDdUavZtHzyqtJrWuKJ1ydEC", // Replace with your actual API key
      },
      body: JSON.stringify({
        license_key: licenseKey,
        instance_name: instanceName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("https://api.lemonsqueezy.com/v1/licenses/activate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer {your_api_key}", // replace with your actual API key
          },
          body: JSON.stringify({
            license_key: licenseKey,
            instance_name: instanceName,
          }),
        })
          .then((response) => response.json())
          .catch((error) => setErrorMsg(error.message));

        // If the activation was successful, you can save the instance ID and give the user access to your product.
        if (data.activated === false) {
          console.log("false and data message is ", data.error);
          setErrorMsg(data.error);
        } else if (data.activated === true) {
          console.log(data);
          setErrorMsg("");
          setSuccessMsg(`Success! Downloading your ${data.meta.variant_name} file now...`);
          const link = document.createElement("a");
          link.href =
            "https://dl.dropboxusercontent.com/s/gcsbzpko9a7x6jt/UnStyled.fig?dl=0";
          link.download = "UnStyled.fig"; // The file name for the downloaded file
          link.style.display = "none"; // Hide the link
          document.body.appendChild(link); // Add the link to the document
          link.click(); // Programmatically click the link to trigger the download
          document.body.removeChild(link); // Remove the link from the document
        }
      });

  };

  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicUnstyledget
          errorMessage={{
            props: {
              children: errorMsg,
            },
          }}
          successMessage={{
            props: {
              children: successMsg,
            },
          }}
          input={{
            onChange: (event) => {
              setValue(event.target.value);
            },
          }}
          download={{
            // @ts-ignore
            onClick: handleClick,
          }}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Unstyledget;
