import { CustomPortableTextComponents } from "@/components/article/CustomPortableTextComponents/CustomPortableTextComponents";
import { PortableText } from "@portabletext/react";
import React from "react";

const PostBody = ({ body }: { body: any }) => {
  return (
    <div className="container-article">
      {" "}
      {body ? (
        <PortableText value={body} components={CustomPortableTextComponents} />
      ) : null}
    </div>
  );
};

export default PostBody;
