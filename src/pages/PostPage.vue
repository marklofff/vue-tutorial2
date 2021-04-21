<template>
  <div>
    <h1 class="mt-4">{{ post.title }}</h1>
    <hr />
    <p>{{ post.date }}</p>
    <hr />
    <p><strong>Advertisement 😃</strong></p>
    <ul>
      <li>
        <strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong>
        - high quality and fast image resize in browser.
      </li>
      <li>
        <strong
          ><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong
        >
        - developer friendly i18n with plurals support and easy syntax.
      </li>
    </ul>
    <p>You will like those projects!</p>
    <hr />
    <h1>h1 Heading 😎</h1>
    <h2>h2 Heading</h2>
    <h3>h3 Heading</h3>
    <h4>h4 Heading</h4>
    <h5>h5 Heading</h5>
    <h6>h6 Heading</h6>
    <h2>Horizontal Rules</h2>
    <hr />
    <hr />
    <hr />

    <h2>Typographic replacements</h2>
    <p>Enable typographer option to see result.</p>
    <p>© © ® ® ™ ™ § § ±</p>
    <p>test… test… test… test?.. test!..</p>
    <p>!!! ??? , – —</p>
    <p>"Smartypants, double quotes" and 'single quotes'</p>
    <h2>Emphasis</h2>
    <p><strong>This is bold text</strong></p>
    <p><strong>This is bold text</strong></p>
    <p><em>This is italic text</em></p>
    <p><em>This is italic text</em></p>
    <p><s>Strikethrough</s></p>
    <h2>Blockquotes</h2>
    <blockquote>
      <p>Blockquotes can also be nested…</p>
      <blockquote>
        <p>…by using additional greater-than signs right next to each other…</p>
        <blockquote>
          <p>…or with spaces between arrows.</p>
        </blockquote>
      </blockquote>
    </blockquote>
    <h2>Lists</h2>
    <p>Unordered</p>
    <ul>
      <li>
        Create a list by starting a line with <code>+</code>, <code>-</code>, or
        <code>*</code>
      </li>
      <li>
        Sub-lists are made by indenting 2 spaces:
        <ul>
          <li>
            Marker character change forces new list start:
            <ul>
              <li>Ac tristique libero volutpat at</li>
            </ul>
            <ul>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>
            <ul>
              <li>Nulla volutpat aliquam velit</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Very easy!</li>
    </ul>
    <p>Ordered</p>
    <ol>
      <li>
        <p>Lorem ipsum dolor sit amet</p>
      </li>
      <li>
        <p>Consectetur adipiscing elit</p>
      </li>
      <li>
        <p>Integer molestie lorem at massa</p>
      </li>
      <li>
        <p>You can use sequential numbers…</p>
      </li>
      <li>
        <p>…or keep all the numbers as <code>1.</code></p>
      </li>
    </ol>

    <div class="card my-4">
      <h5 class="card-header">コメントする：</h5>
      <div class="card-body">
        <form @submit.prevent>
          <div class="form-group">
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <button @click="createComment()" class="btn btn-primary">投稿</button>
        </form>
      </div>
    </div>

    <div>
      <div class="media mt-4">
        <img class="d-flex mr-3 rounded-circle"
        src="http://placehold.it/50x50" alt="" />
        <div class="media-body">
          <h5 class="mt-0">まるまる</h5>
          いいですね！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      postUrl: this.$route.params.url,
    };
  },
  computed: {
    ...mapGetters(["getPost"]),

    post() {
      return this.getPost(this.postUrl);
    },
  },
  methods: {
    createComment() {
      console.log("コメントを投稿する")
    }
  }
};
</script>