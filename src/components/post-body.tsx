import { BuilderComponent } from "@builder.io/react";
import React from "react";
import "../builder-registry";

export default function PostBody({ content }: any) {
  return (
    <div className="max-w-2xl mx-auto">
      <BuilderComponent
        options={{ includeRefs: true }}
        model="post"
        content={content}
      />
    </div>
  );
}
