import blogJson from "../blogJson.json";
import { BLOGS_PER_PAGE } from "../../../utils/Constants";

export default async (req, res) => {
  const {
    method,
    body,
    query: { latest, all, showme, categories, itemid, pageno, totalpages },
  } = req;

  switch (method) {
    case "GET":
      try {
        let result = [];

        if (all === "true") {
          return res.status(200).json(blogJson);
        }

        if (showme) {
          for (let item = 0; item < blogJson.length; item++) {
            if (blogJson[item].tag === showme) {
              result.push(blogJson[item]);
            }
          }
          return res.status(200).json(result);
        }

        if (categories === "all") {
          result = [...new Set(blogJson.map((item) => item.tag))];
          return res.status(200).json(result);
        }

        if (itemid) {
          result = blogJson.filter((item) => item.id == itemid);
          return res.status(200).json(result);
        }

        if (pageno) {
          let itemPerPage = BLOGS_PER_PAGE;
          let lastItem = itemPerPage * pageno;
          let firstItem = lastItem - itemPerPage;

          for (let pageblog = firstItem; pageblog < lastItem; pageblog++) {
            if (blogJson[pageblog]) {
              result.push(blogJson[pageblog]);
            }
          }
          return res.status(200).json(result);
        }

        if (totalpages == "true") {
          let numberOfItems = Math.ceil(blogJson.length / BLOGS_PER_PAGE);

          for (let pn = 1; pn <= numberOfItems; pn++) {
            result.push(pn);
          }

          return res.status(200).json(result);
        }

        if (latest == "true") {
          for (let latestBlog = 0; latestBlog < 3; latestBlog++) {
            result.push(blogJson[latestBlog]);
          }
          return res.status(200).json(result);
        }
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method not support" });
  }
};
