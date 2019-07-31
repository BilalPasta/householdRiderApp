import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { Snackbar ,Button} from 'react-native-paper';

export default class SnackBar extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
        <Snackbar
          visible={this.state.visible}
          onDismiss={() =>{ this.setState({ visible: false })
          this.props.moveNewSceen();
        }}
          action={{
            label: 'Undo',
            onPress: () => {
this.props.moveNewSceen();            },
          }}
        >
        
is near by you click Ok to confirm Order        </Snackbar>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});



