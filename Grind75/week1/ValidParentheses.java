import java.util.Stack;

public class ValidParentheses {
  public static void main(String[] args) {
    
  }
  public boolean isValid(String s){
    Stack <Character> st = new Stack<>();
    for ( int i = 0; i < s.length(); i++){
      char symbol = s.charAt(i);
      if ( symbol == '(') {
        st.push(')');
      } else if (symbol == '['){
        st.push(']');
      } else if ( symbol == '{'){
        st.push('}');
      } else if (st.pop() != symbol || st.isEmpty()){
        return false;
      }
    }
    return st.isEmpty();
  }
}
