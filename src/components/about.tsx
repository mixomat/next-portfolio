type AboutProps = {
  aboutHtml: string
}

export function About({ aboutHtml }: AboutProps) {
  return (
    <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
  );
}
