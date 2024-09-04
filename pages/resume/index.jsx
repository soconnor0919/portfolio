import Color from "../../components/utils/page.colors.util";
import ComingSoon from "../../components/sections/comingsoon";
import Career from "../../components/sections/index/career";

import colors from "../../content/resume/_colors.json";
import settings from "../../content/_settings.json";

//
export default function CaseStudies({}) {
  return (
    <>
      <Color colors={colors} />
      <Career />
      {/* <ComingSoon /> */}
    </>
  );
}
