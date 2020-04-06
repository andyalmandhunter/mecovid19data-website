(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return m}));var a=n("q1tI"),r=n.n(a),s=n("Bl7J"),i=n("vrFN"),l=n("XpzG");var o=function(e){var t=e.filename,n=e.html,a=e.width<640?"small":"large";return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",null,r.a.createElement("embed",{type:"image/svg+xml",src:"/plot/"+t+"?size="+a})),r.a.createElement("div",{className:"plot-content",dangerouslySetInnerHTML:{__html:n}}))},h=function(){var e=l.data,t=function(){var e=Object(a.useState)(null),t=e[0],n=e[1];return Object(a.useEffect)((function(){function e(){n(window.innerWidth)}return n(window.innerWidth),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t}();return null===t?null:r.a.createElement(r.a.Fragment,null,e.allMarkdownRemark.edges.map((function(e){var n=e.node;return r.a.createElement(o,{key:n.frontmatter.slug,filename:n.frontmatter.filename,html:n.html,width:t})})))},m="2659130781";t.default=function(e){var t=e.data;return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement("div",{className:"summary-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement("h1",null,"References"),t.allReferencesYaml.edges.map((function(e,t){var n=e.node;return r.a.createElement("p",{key:n.slug,id:n.slug},r.a.createElement("a",{href:n.url},"["+(t+1)+"]")," ",n.text)}))))}},XpzG:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"html":"<p>As Dr. Shah, from the Maine CDC, has mentioned in his briefings, testing capacity is limited, and confirmed cases are an underestimate of the true case load. Current testing guidelines are available from the <a href=\\"https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus.shtml#testing\\">Maine CDC</a>.\\n[1] [2]</p>","frontmatter":{"filename":"case_status.svg","slug":"case-status"}}},{"node":{"html":"<p>[1]</p>","frontmatter":{"filename":"new_cases_maine.svg","slug":"new-cases-maine"}}},{"node":{"html":"<p>[1]</p>","frontmatter":{"filename":"total_deaths.svg","slug":"total-deaths"}}},{"node":{"html":"<p>[1]</p>","frontmatter":{"filename":"new_deaths.svg","slug":"new-deaths"}}},{"node":{"html":"<p>[1]</p>","frontmatter":{"filename":"cases_by_county.svg","slug":"cases-by-county"}}},{"node":{"html":"<p>[1] [4]</p>","frontmatter":{"filename":"cases_per_ten_thousand_res.svg","slug":"cases-per-ten-thousand-res"}}},{"node":{"html":"<p>Hover over the county names in the legend to highlight the data from each county.</p>\\n<p>[1]</p>","frontmatter":{"filename":"growth_by_county.svg","slug":"growth-by-county"}}},{"node":{"html":"<p>Case counts are plotted on a log scale. Hover over the county names in the legend to highlight the data from each county, and compare the slope of the highlighted county line with the slope of the gray case doubling lines to get a rough estimate of how quickly cases are growing.</p>\\n<p>[1]</p>","frontmatter":{"filename":"growth_by_county_log.svg","slug":"growth-by-county-log"}}},{"node":{"html":"<p>[3]</p>","frontmatter":{"filename":"age_range.svg","slug":"age-range"}}},{"node":{"html":"<p>Dr. Nirav D. Shah states, in his briefings, that more hospitals have been reporting asset counts to the CDC, which is at least partially responsible for the increase in the number of available ventilators. Alternative ventilators are ventilators that are typically used in other parts of the hospital (e.g. surgery), which have recently been approved for use in treating COVID-19 patients. </p>\\n<p>Source: Maine CDC Daily Situation Briefing Videos (new data every weekday) [3]</p>","frontmatter":{"filename":"ventilators.svg","slug":"ventilators"}}},{"node":{"html":"<p>Dr. Nirav D. Shah states, in his briefings, that more hospitals have been reporting asset counts to the CDC, which is at least partially responsible for the increase in the number of available Intensive Care Unit (ICU) beds.</p>\\n<p>Source: Maine Daily Situation Briefing Videos (new data every weekday) [3]</p>","frontmatter":{"filename":"icu_beds.svg","slug":"icu-beds"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-2172ae8b3c26e12d7639.js.map