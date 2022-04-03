import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto px-8">
      <h1 className="text-center my-10 text-2xl text-medium">Blogs</h1>

      <div className="q-and-ans">
        <h3 className="text-2xl text-bold">
          <li>What is Context API?</li>
          <p className="text-xl mt-4">
            Context API allows us to share state across the entire app lightly
            and with ease. we can drill our props easily using context api. we
            are enables to exchanges unique details and assists in solving
            prop-drilling from all levels of our application. Using react
            Context api we can move props from grandparent to child to parent,
            and so on.
          </p>
          <p className="text-xl mt-4">
            It is also easy to use we just have to write createContext(). and it
            returns a consumer and a provider. Provider is a component that as
            it's names suggests provides the state to its children. It will hold
            the [store] and be the parent of all the components that might need
            that store. Consumer as it so happens is a component that consumes
            and uses the state.
          </p>
        </h3>
      </div>

      <div className="q-and-ans mt-8">
        <h3 className="text-2xl text-bold">
          <li>What are semantic tag?</li>
          <p className="text-xl mt-4">
            HTML was originally created as a markup language to describe
            documents on the early internet. but now the internet has changed a
            lot of people are curious about the internet. For that reason,
            computer scientists also introduce more Easily understandable code
            for us. Semantic tag is much easier to read. alongside that, Search
            engines and assistive technologies (like screen readers for users
            with a sight impairment) are also able to better understand the
            context and content of your website, meaning a better experience for
            your users
          </p>
          <p className="text-xl mt-4">
            The semantic elements are &lt;article&gt; - &lt;aside&gt; -
            &lt;section&gt; - &lt;nav&gt; - &lt;main&gt; - &lt;footer&gt; and so
            on.
          </p>
        </h3>
      </div>
    </div>
  );
};

export default Blogs;
